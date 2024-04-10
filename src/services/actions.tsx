/* eslint-disable no-async-promise-executor */
import { ReactElement } from 'react';
import history from '../history';

import api from './api';

function clear() {
  localStorage.removeItem('token');
  // history.push('/login');
}

function handleResponse(resp:any) {
  if(resp){
    if (resp.status === 403) {
      clear();
    } else {
      return resp.data;
    }
  }

}

export async function get(url:string | any) {

  return await api.get(url, {
    headers: {
      authorization: 'Bearer '+ await localStorage.getItem('token')
    }
  })
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      console.log(error);
      clear();
    });
}


export async function put(url:string | any, data: any, method = "PUT") {

  // Swal.mixin({
  //   toast: true,
  //   position: 'top-end'
  // }).fire({ onOpen: () => { Swal.showLoading() } });

  return await new Promise(async (resolve, reject) => {
    try {
       await api.put(`${url}`, JSON.stringify(data), {
        headers: {
          authorization: 'Bearer ' + await localStorage.getItem("token")
        }
      })
        .then(response => {
          resolve(handleResponse(response))
        })
        .catch(error => {
          reject(error)
          // clear()
        })
    } catch (error) {
      reject(error)
    }
  })
}

export async function post(url:string | any, data: any) {
  return await new Promise(async (resolve, reject) => {
    try {
      await api.post(url, data, {
        headers: {
          authorization: 'Bearer ' + await localStorage.getItem("token")
        }
      })
        .then(response => {
          resolve(handleResponse(response))
        })
        .catch(error => {
          reject(error)
          // handleResponse()
        })
    } catch (error) {
      reject(error)
    }
  })
  }

  export async function del(url:string | null, id: string | number | null) {

    // Swal.mixin({
    //   toast: true,
    //   position: 'top-end'
    // }).fire({ onOpen: () => { Swal.showLoading() } });
  
    return await new Promise(async (resolve, reject) => {
     
      try {
        await api.delete(`${url}/${id}`, {
          headers: {
            authorization: 'Bearer ' + await localStorage.getItem("token")
          }
        })
          .then(response => {
            resolve(handleResponse(response))
          })
          .catch(error => {
            reject(error)
            // clear()
          })
      } catch (error) {
        reject(error)
      }
    })
  }
  
  export const defaults = {
    headers: {
      Authorization: '',
    },
  };
  
