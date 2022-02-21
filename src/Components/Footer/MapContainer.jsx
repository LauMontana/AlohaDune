import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '300px',
    height: '300px'
  };

  const center = {
    lat: 4.710989,
    lng: -74.072090
  };

class MapContainer extends Component {
  render() {
    return (
        <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_ID}>
            <GoogleMap
               mapContainerStyle={containerStyle}
               center={center}
               zoom={10}>
           
           </GoogleMap>
            </LoadScript>

           

      
    )
  }
}

export default MapContainer;