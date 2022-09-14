import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { currencySelector  } from '../redux/selectors'

export default function BTCRow() {

  const currencyAmount = useSelector(currencySelector.getAmount)
  const currencyData = useSelector(currencySelector.getCurrencyData)
  const activeCurrency = useSelector(currencySelector.getActiveCurrency)

  const pickedCurrency = useMemo(() => currencyData === undefined ? undefined : currencyData[activeCurrency], [activeCurrency, currencyData])
  const price = useMemo(() => pickedCurrency === undefined ? 0 : currencyAmount / pickedCurrency?.buy, [currencyAmount, pickedCurrency]) 

  return (
    <div>
      <div>
      <input disabled type='number' value={ price.toString() } onChange={ () => {} }/>
      <select >
        <option value='BTC'>BTC</option>        
      </select>
    </div>
    </div>
  )
}
