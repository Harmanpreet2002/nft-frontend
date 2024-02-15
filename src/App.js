import Routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './redux/store';
import styles from "./assets/styles/root.css";
import { MetaMaskContextProvider } from "./hooks/metamask";

/** intialize persist in local storage */
const persistor = persistStore(store);

function App() {
  return (
    <MetaMaskContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </MetaMaskContextProvider>
  );
}

export default App;
