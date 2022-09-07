import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Input from './components/Input'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '040 656 4025' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')

  const showPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.every(person => person.name.toLowerCase() !== newName.toLowerCase())) {
      const personObject = {
      name: newName,
      number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    else {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
    }
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
      setNewName(event.target.value)
    };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Input name='filter' term={search} action={handleSearchChange} />
      <h2>Add new contact</h2>
        <PersonForm submit={addPerson} nameTerm={newName} numberTerm={newNumber} nameAction={handlePersonChange} numberAction={handleNumberChange} />
      <h2>Numbers</h2>
        <PersonList showPersons={showPersons} />        
    </div>
  )
}

export default App
