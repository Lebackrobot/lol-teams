import Card from './components/Card/Card'
import Form from './components/Form/Form'

const App = () => {
  return (
    <div className='App'>
      <Card>
        <Form metadata={[
          { type: 'text', placeholder: 'teste', label: 'teste', id: 'teste1' },
          { type: 'password', placeholder: 'teste', label: 'teste', id: 'teste2' },
        ]}/>
      </Card>
    </div>
  )
}

export default App;
