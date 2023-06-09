import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

Map.propTypes = {
  coordinates: PropTypes.object,
  googleKey: PropTypes.string,
}

function Map({ coordinates, googleKey }) {
  const { lat, lng } = coordinates

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey,
  })

  const options = {
    mapTypeId: 'hybrid',
    styles: [
      {
        featureType: 'road',
        stylers: [{ visibility: 'off' }],
      },
    ],
    disableDefaultUI: true,
    streetViewControl: false,
    zoomControl: true,
    fullscreenControl: true,
    gestureHandling: 'none',
  }

  const containerStyle = {
    display: 'inline-block',
    width: '100%',
    maxWidth: { xs: '100%', sm: 450 },
  }
  const mapStyle = {
    aspectRatio: '1/1',
  }

  if (loadError) return <Box>Error loading maps</Box>
  if (!isLoaded) return <Box>Loading maps</Box>

  return (
    <Box
      sx={containerStyle}
      borderRadius={2}
      overflow='hidden !important'
      // HIDE OVERFLOW OVER BORDER RADIUS
    >
      {isLoaded && googleKey ? (
        <GoogleMap
          mapContainerStyle={mapStyle}
          center={coordinates}
          zoom={10}
          controlsSize={5}
          options={options}
        >
          <MarkerF position={{ lat, lng }} visible={true} />
        </GoogleMap>
      ) : null}
    </Box>
  )
}
export default Map
