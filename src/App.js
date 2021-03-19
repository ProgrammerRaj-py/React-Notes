import './App.scss'
import MainContainer from './components/MainContainer'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <main className="MainApp">
        <MainContainer />
      </main>
    </Provider> 
  );
}

export default App;
