import { createRoot } from 'react-dom/client';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
import UserSearch from './classes/UserSearch';

const App = () => {
  return (
    <UserSearch
      users={[
        { name: 'Jet', age: 27 },
        { name: 'AJ', age: 27 },
        { name: 'Ramil', age: 27 },
      ]}
    />
  );
};

createRoot(document.querySelector('#root')!).render(<App />);
