import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Jet', age: 27 },
  { name: 'AJ', age: 27 },
  { name: 'Ramil', age: 27 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);

    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>{user && `${user.name} ${user.age}`}</div>
    </div>
  );
};

export default UserSearch;
