import './App.css';
import UseStateComponent from './UseStateComponent'
// import UseEffectComponent from './UseEffectComponent'
import GuessImageComponent from './GuessImageComponent'
import CounterComponent from './CounterComponent'
// import { Provider } from 'redux'
import { Provider } from "react-redux";
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UseStateComponent /> */}
        {/* <UseEffectComponent /> */}
        {/* <GuessImageComponent /> */}
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
