import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { createShipmentService } from '../helpers/sendShipment';

export const CreateShipment = ({ setRates }) => {

  const [shipment, setShipment] = useState('');

  const handleInputChange = (e) => {
    setShipment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createShipmentService()
        .then(setRates);
  }

  return (
    <>
    <h2>Datos del envio:</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={shipment}
        onChange={handleInputChange}
      />
    </form>
    </>
    
  )
}

CreateShipment.propTypes = {
  setRates: PropTypes.func.isRequired
}
