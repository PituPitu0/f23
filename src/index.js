import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './doc/scss/master.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/css';
import 'react-modal-video/scss/modal-video.scss';

ReactDOM.render(
  <React.StrictMode> {/* Dodaj <React.StrictMode> tutaj */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
