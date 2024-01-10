import axios from 'axios'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaArrowUpLong } from 'react-icons/fa6'
import { FaArrowDownLong } from 'react-icons/fa6'

const scrollAnimation = keyframes`
  to {
    transform: translateX(calc(-100% + 2px)); /* Usar calc para evitar saltos */
  }
`

const Container = styled.div`
  overflow: hidden;
`

const Orderedlist = styled.ol`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 250s linear infinite;
`

const ListItem = styled.li`
  white-space: nowrap;
  display: inline-block;
  margin-left: 10px;
`
function ExchangeRateBar() {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [previousRate, setPreviousRate] = useState(null)
  const [changeType, setBtcUsdtChange] = useState(true)

  useEffect(() => {
    axios
      .get('https://rest.coinapi.io/v1/exchangerate/BTC/USDT', {
        headers: {
          'X-CoinAPI-Key': 'D85256CA-5CDD-450E-AB56-A4B7FF1536F2', // Replace with your API key
        },
      })
      .then(function (response) {
        const currentRate = response.data.rate

        if (previousRate !== null) {
          const BTCUSDPercetChange = ((currentRate - previousRate) / previousRate) * 100

          console.log(`Percentage Change: ${BTCUSDPercetChange}%`)

          if (BTCUSDPercetChange > 0) {
            console.log('Positive Change')
            setBtcUsdtChange(true)
          } else if (BTCUSDPercetChange < 0) {
            console.log('Negative Change')
            setBtcUsdtChange(false)
          } else {
            console.log('No Change')
          }
        }
        setPreviousRate(currentRate.toFixed(2))
        setExchangeRate(currentRate.toFixed(2))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [previousRate])

  const arrayRepetido = Array(50).fill(
    <ListItem style={{ marginRight: '80px', color: changeType ? 'green' : 'red' }}>
      {changeType ? <FaArrowUpLong /> : <FaArrowDownLong />}
      {exchangeRate !== null ? exchangeRate : 'Loading...'}
    </ListItem>
  )
  return (
    <Container>
      <Orderedlist>{arrayRepetido.map(item => item)}</Orderedlist>
    </Container>
  )
}

export default ExchangeRateBar
