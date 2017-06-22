import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux';
import resultApp from './reducers';
import { createStore } from 'redux';

let store = createStore(resultApp);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);
