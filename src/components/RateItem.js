import React from 'react'

export const RateItem = ({ service_level_name, currency_local, days, total_pricing }) => {
  return (
      <div className='card'>
        <ul>
          <li>Proveedor: { service_level_name }</li>
          <li>Moneda local: { currency_local }</li>
          <li>Dias: { days }</li>
          <li>Precio total: { total_pricing }</li>
        </ul>
      </div>
  )
}
