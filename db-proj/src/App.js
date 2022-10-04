import './App.css';

// import Records from './records.json'
import DataRecords from './Components/DataRecords'




function App() {
  return(
    <div>
      <h1 className='header-text'>Media Contact Database</h1>
      <DataRecords  />
    </div>
  )
}
export default App;
