import { createRoot } from 'react-dom/client';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

const App = () => {
  return <UserSearch />;
};

createRoot(document.querySelector('#root')!).render(<App />);
