import React from 'react'
import './styles.css'

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.4369382302875!2d-118.50144108482303!3d34.26290858054906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29a9091c8958f%3A0xa929a41411c78174!2s16830%20Kingsbury%20St%2C%20Granada%20Hills%2C%20CA%2091344%2C%20EE.%20UU.!5e0!3m2!1ses!2sgt!4v1642519962739!5m2!1ses!2sgt"
      allowFullScreen=""
      loading="lazy"
      className="google-maps"
    ></iframe>
  )
}

export default Map
