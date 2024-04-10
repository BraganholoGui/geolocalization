import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import Map from '../Map';
import axios from 'axios';
const geolib = require('geolib');

declare global {
    interface Window {
        google: any;
    }
}

function LocationComponent() {
    const [locationData, setLocationData] = useState<GeolocationCoordinates | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setLocationData(position.coords);
                    setTimestamp(moment(position?.timestamp).format('DD/MM/YYYY HH:mm:ss'));
                    setError(null);
                },
                error => {
                    setError(error.message);
                }
            );

        } else {
            setError("Geolocation is not supported by this browser.");
        }

        buscarCEP()


    };

    const buscarCEP = async () => {
        try {
          const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
              lat: -20.5193216,
              lon: -47.4120192,
              format: 'json'
            }
          });
          if (response.data && response.data.address) {
            const endereco = response.data.address;
            const cep = endereco.postcode || 'CEP não encontrado';
            return cep;
          } else {
            return 'CEP não encontrado';
          }
        } catch (error) {
          console.error('Erro ao buscar CEP:', error);
          return 'Erro ao buscar CEP';
        }
      };

    useEffect(() => {
        console.log(locationData)
        console.log(timestamp)
    }, [locationData, timestamp])

    return (
        <div>
            <h1>Localização do Dispositivo</h1>
            <button onClick={getLocation}>Obter Localização</button>
            {latitude && longitude && (
                <p>
                    Latitude: {latitude}, Longitude: {longitude}
                </p>
            )}
            {error && <p>{error}</p>}
        </div>

    );
}

export default LocationComponent;



