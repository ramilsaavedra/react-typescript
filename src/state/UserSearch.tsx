import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Kate', age: 20 },
  { name: 'Jet', age: 20 },
  { name: 'Poopee', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  const findUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);

    console.log(foundUser, 'foundUser');
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h3>Find User</h3>
      <input
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={findUser}>Find</button>
      {user ? (
        <>
          <div>{user.name}</div>
          <div>{user.age}</div>
        </>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserSearch;
