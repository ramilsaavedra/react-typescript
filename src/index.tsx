import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return <UserSearch />;
};

createRoot(document.querySelector('#root')!).render(<App />);
