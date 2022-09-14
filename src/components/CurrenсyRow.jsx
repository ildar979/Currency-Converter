import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAmount, actionCurrencyData, actionDefaultCurrency, actionCurrencyTyping } from '../redux/actionCreater'
import { currencySelector } from '../redux/selectors'

const URL = 'https://www.blockchain.com/ru/ticker'

export default function CurrenсyRow() {

  const activeCurrency = useSelector(currencySelector.getActiveCurrency)
  const dispatch = useDispatch()

  const [currencyOptions, setCurrencyOptions] = useState([])  // записываем список наименований валют в массив

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        dispatch(actionCurrencyData(data))
        setCurrencyOptions([ ...Object.keys(data) ])
        dispatch(actionDefaultCurrency(Object.keys(data).find(elem => elem === 'RUB')))
      })      
  }, [dispatch])

  const handleInputs = useCallback((event) => {
    dispatch(actionAmount(event.target.value))
  }, [dispatch])

  const handleChoiceOfCurrency = useCallback((event) => {
    dispatch(actionCurrencyTyping(event.target.value))
  }, [dispatch])

  return (
    <div>
      <input type='number' onChange={ handleInputs }/>
      <select value={ activeCurrency } onChange={ handleChoiceOfCurrency }>
        { currencyOptions?.map( option => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
    </div>
  )
}
