import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: `https://countries.trevorblades.com/`
})

ReactDOM.render(<App client={client} />, document.getElementById('root'));

serviceWorker.unregister();
