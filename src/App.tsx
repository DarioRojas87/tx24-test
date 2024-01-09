import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.styles.ts'
import CryptoDashboard from './components/CryptoDashBoard/CryptoDashboard'

const App: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [previousRate, setPreviousRate] = useState(null)
  const [changeType, setChangeType] = useState(true)

  // useEffect(() => {
  //   axios
  //     .get('https://rest.coinapi.io/v1/exchangerate/BTC/USDT', {
  //       headers: {
  //         'X-CoinAPI-Key': 'D85256CA-5CDD-450E-AB56-A4B7FF1536F2', // Replace with your API key
  //       },
  //     })
  //     .then(function (response) {
  //       const currentRate = response.data.rate

  //       // Check if previous rate is available for comparison
  //       if (previousRate !== null) {
  //         // Calculate percentage change
  //         const percentageChange = ((currentRate - previousRate) / previousRate) * 100

  //         console.log(`Percentage Change: ${percentageChange}%`)

  //         // Determine if the change is positive, negative, or unchanged
  //         if (percentageChange > 0) {
  //           console.log('Positive Change')
  //           setChangeType(true)
  //         } else if (percentageChange < 0) {
  //           console.log('Negative Change')
  //           setChangeType(false)
  //         } else {
  //           console.log('No Change')
  //         }
  //       }

  //       // Save the current rate for future comparison
  //       setPreviousRate(currentRate)

  //       // Set the current exchange rate
  //       setExchangeRate(currentRate)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }, [previousRate]) // Include previousRate in the dependencies array to trigger the effect when it changes

  return (
    <div>
      <CryptoDashboard />
      {/* <h1 style={changeType ? { color: 'green' } : { color: 'red' }}>
        Exchange Rate: {exchangeRate !== null ? exchangeRate : 'Loading...'}
      </h1> */}
    </div>
  )
}

export default App
