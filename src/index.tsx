import { createRoot } from 'react-dom/client';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
  return <EventComponent />;
};

createRoot(document.querySelector('#root')!).render(<App />);
