import './App.css';

// import Records from './records.json'
import Data from './data.json'

function App() {
  return(
    <div>
      <h2>JSON Data</h2>

{
  Data.map( data => {
    return(
      <div className='data-text' key={data.id}>
        <li className='data-li'>{data.title}</li>
       {data.content}
      </div>
    )
  })
}

    </div>
  )
}
export default App;
