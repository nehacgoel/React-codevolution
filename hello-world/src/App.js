// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="batman"> <p>This is children props</p></Greet>
      <Greet name="Clark" heroName="Superman"></Greet>
      <Welcome name="Bruce" heroName="batman"/>
      <Welcome name="Clark" heroName="Superman"/>

      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
