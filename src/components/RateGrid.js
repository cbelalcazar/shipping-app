import React from 'react'
import { RateItem } from './RateItem'

export const RateGrid = ({ rates }) => {
  return (
    <>
      <h1>Tarifas</h1> 
      <hr />
      <div className='card-grid'>
        {
            rates.map((rate, i) => (
                <RateItem
                    key={i}
                    {...rate.attributes}
                />
            ))
        }
      </div>
    </>
  )
}
