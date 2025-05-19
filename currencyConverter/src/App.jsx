import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)  

//storing the information
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  //swap
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="">
      <h1 className="text-3xl bg-orange-600 ">CurrencyApp</h1>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
              <div className="w-full mb-1">
                <InputBox
                  label='to'
                  currencyOption={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                  />
              </div>
              <button 
              type='submit'
              className='w-full bg-blue-400 text-white px-4 py-3 rounded-lg'>
                Convert {from} to {to}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
