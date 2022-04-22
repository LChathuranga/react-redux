import { Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index'
import './App.css';

function App() {

const counter = useSelector((state) => state.counter)
const dispatch = useDispatch()

const increment = () => {
  dispatch(actions.increment())
}
const decrement = () => {
  dispatch(actions.decrement())
}
const add = () => {
  dispatch(actions.add(10))
}

  return (
    <>
     <Container>
       <div className="text-center mt-5">
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decremrnt</Button>
        <Button onClick={add}>Add 10</Button>
       </div>
     </Container>
    </>
  );
}

export default App;
