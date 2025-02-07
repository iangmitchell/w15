import './App.css';
import ______ from './Header'
import ______ from './Column'
import './css/bulma2.css'
import { use______, use_____ } from 'react';

function App() {
  const [independentX, ______________X] = ________(0)
  const [dependentY, ____________Y] = ________(0)

  const increaseIndependentHandler=( ()=>{
    setIndependent_(____________+1)
  })

  useEffect( ()=> {
    setDependent_(____________*2)
  },[____________])

  return (
    <>
    <Header title="y = 2x"/>
    <div className='columns'>
      <div className='column'>
        <div className="card">
          <div className='title'> Dependent Y, y=2* x</div>
          <div className='content is-medium'>
            <p> {dependentY} </p>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className="card">
          <div className='title'> Independent X, </div>
          <div className='content is-medium'>
            <p> {independentX} </p>
            <button className='is-danger' onClick={__________________________}> Increment X</button>
          </div>
        </div>
      </div>
     </div>

    <Header title="y = 2x"/>
    <div className='block'>
      <div className='columns'>
        <Column title='x' data={independentX} />
        <Column title='y=2x' data={dependentY} />
      </div>
    </div>

   </>
  );
}
export default App;
