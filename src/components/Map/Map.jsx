
// Map.js
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useTheme } from '@mui/material/styles';

const Maps = ({setCoordinates,setBounds,coordinates}) => {
  // const coordinates = { lat: 0, lng: 0 };
  const theme = useTheme(); // Use theme from context

  // You can use theme.palette.primary.main for example to access theme colors
  const mapStyle = {
    height: '100vh',
    width: '100%',
  };

  return (
    <APIProvider
      apiKey={"AIzaSyDX2wHJAB_m4x271kblFrlAXJe6uXkWCgc"} // Use environment variable for security
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <div style={mapStyle}>
        <Map
          defaultZoom={3}
          defaultCenter={coordinates}
         
          onCameraChanged={(ev) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }
        />
      </div>
    </APIProvider>
  );
};

export default Maps;
