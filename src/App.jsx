import logo from './assets/logo.svg';
import Input from './components/Input';
import Output from './components/Output';
import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
  {/* BUTTON PERCENTAGES */}
  const percentages = [
    {
      value: 1.05,
      percentage: 5
    },
    {
      value: 1.10,
      percentage: 10
    },
    {
      value: 1.15,
      percentage: 15
    },
    {
      value: 1.25,
      percentage: 25
    },
    {
      value: 1.50,
      percentage: 50
    }
  ]
  {/* INPUTS */}
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);
  {/* OUTPUTS */}
  const [tipAmount, setTipAmount] = useState(0.00);
  const [totalAmount, setTotalAmount] = useState(0.00);
  {/* RESET BTN */}
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  {/*INPUT VALIDATION */}
  const [isBillInvalid, setIsBillInvalid] = useState(false);
  const [isPersonInvalid, setIsPersonInvalid] = useState(false);

  {/* DO THE MATH AND SHOW IT ON THE RIGHT SIDE */}
  useEffect(() => {
    const total = ((bill * (1 + (tip / 100))));
    if(person === 0) {
      setTotalAmount(total.toFixed(2));
    } else {
      setTotalAmount((total / person).toFixed(2));
    }

    const tipTotal = (total - bill);
    if(person === 0 && tipTotal >= 0.00) {
      setTipAmount(tipTotal.toFixed(2));
    } else {
      setTipAmount((tipTotal / person).toFixed(2));
    }

    if (total != 0 && tipTotal != 0) {
      setIsResetDisabled(false);
    }
  }, [tip, person]
);

  function handleBill(e) {
    console.log(e);
    if (e <= 0) {
      setIsBillInvalid(true);
    } else {
      setIsBillInvalid(false);
      setBill(e);
    }
  }

  function handleTip(e) {
    setTip(e);
    console.log(e);
  }

  function handlePerson(e) {
    if (e <= 0) {
      setIsPersonInvalid(true);
    } else {
      setIsPersonInvalid(false);
      setPerson(e);
    }
  }

  function handleReset() {
    setBill(0);
    setTip(0);
    setPerson(0);
    setTipAmount(0);
    setTotalAmount(0);
    setIsResetDisabled(true);
  }

  return (
    <>
      <main>
      <img className='logo' src={logo}/>
      <div id='container' className='container'>
      {/*left side*/}
        <div id='form-container' className='form-container'>
          <Input 
            id='bill'
            text='Bill'
            isInvalid={isBillInvalid}
            errorMessage='Cant be zero'
            onChange={handleBill}
          />
          <span className='form-label'>Select Tip %</span>
          <div className='button-container'>
            {percentages.map(item => {
              return (
                <Button 
                  name='tipPercentage'
                  tip={tip}
                  value={item.value}
                  percentage={item.percentage}
                  handleTip={handleTip}
                  key={crypto.randomUUID()}                  
                />
              )
            })}
            <input type='text' name='tipPercentage' className='custom-input' placeholder='Custom'
            onChange={e => handleTip(e.target.value)}></input>
          </div>
          <Input 
            id='person'
            text='Number of People'
            isInvalid={isPersonInvalid}
            errorMessage='Cant be zero'
            onChange={handlePerson}
          />
        </div>
      {/*right side*/}
        <div id='output-container' className='output-container'>
          <div className='output-values-container'>
            <Output 
              labelText='Tip Amount'
              labelValue={tipAmount}
            />            
            <Output 
              labelText='Total'
              labelValue={totalAmount}
            />
          </div>
          <button className='reset-btn' disabled={isResetDisabled} onClick={handleReset}>RESET</button>
        </div>
      </div>
      </main>
    </>
  )
}

export default App
