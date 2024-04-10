import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import { get } from '../../services/actions';

function LocationComponent() {
    const [locationData, setLocationData] = useState<GeolocationCoordinates | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    buscarCEP(position.coords.latitude, position.coords.longitude)
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

    };

    const buscarCEP = async (latitude: number | null, longitude: number | null) => {
        try {
            let query = '';
            let latitudeQuery = latitude ? `latitude=${latitude}` : null;
            let longitudeQuery = longitude ? `longitude=${longitude}` : null;
            query = query.includes('?') ? query + '&' + latitudeQuery : query + '?' + latitudeQuery;
            query = query.includes('?') ? query + '&' + longitudeQuery : query + '?' + longitudeQuery;
            console.log(query)

            await get(`/geoloc${query}`)
                .then(async response => {
                    if (response) {
                        console.log(response)
                    }
                });
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
                    Latitude: {latitude}, Longitude: {longitude}<br />
                    Data: {timestamp}
                </p>
            )}
            {error && <p>{error}</p>}
        </div>

    );
}

export default LocationComponent;



