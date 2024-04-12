import { Provider } from 'react-redux';
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div class="container">
        <div class="row justify-content-center align-items-center main-row">
          <div class="col shadow main-col bg-white">
            <Header/>
            <Search/>
            <List/>
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
