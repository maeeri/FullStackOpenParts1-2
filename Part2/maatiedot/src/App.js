import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Filter from './components/Filter';
import ShowArea from './components/ShowArea';

function App() {
  const [countries, setCountries] = useState([])
  const [search, setNewSearch] = useState('')
  

  useEffect(() => {
      const getData = () => {
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
          setCountries(res.data)
        })
        .catch(err => console.log(err))
      }
    getData()
  }, [search])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    console.log(event.target.value)
    
  }

  const showCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()))

    return (
      <div>
        <Filter term={search} action={handleSearchChange} />
        <ShowArea show={showCountries} handleClick={setNewSearch} />
      </div>
    )
}

export default App
