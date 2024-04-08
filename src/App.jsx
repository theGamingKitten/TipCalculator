import './App.css';
import logo from '../public//img/logo.svg';

function App() {
  return (
    <>
      <main>
      <img className='logo' src={logo}/>
      <div id='container' className='container'>
      {/*left side*/}
        <div id='form-container' className='form-container'>
          <span className='form-label'>Bill</span>
          <input type='text' placeholder='0' id='bill'></input>
          <span className='form-label'>Select Tip %</span>
          <div className='button-container'>
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input type='text' className='custom-input' placeholder='Custom'></input>
          </div>
          <span className='form-label'>Number of People</span>
          <input type='text' placeholder='0' id='person'></input>
        </div>
      {/*right side*/}
        <div id='output-container' className='output-container'>
          <div className='output-values-container'>
            <span className='output-label'>Tip Amount 
            <span className='per-person-label'>/ person</span></span>
            <span className='output-value'>$0.00</span>
            <span className='output-label'>Total 
            <span className='per-person-label'>/ person</span></span>
            <span className='output-value'>$0.00</span>
          </div>
          <button className='reset-btn'>RESET</button>
        </div>
      </div>
      </main>
    </>
  )
}

export default App
