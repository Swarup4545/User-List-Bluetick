import React, { useEffect, useState } from 'react';

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const deleteUser = (username: string) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 container mx-auto mt-5">
      <h2 className="text-3xl font-semibold mb-4 text-center">User List</h2>
      {loading ? (
        <p className="text-center text-blue-600">Loading...</p>
      ) : (
        <ul className="grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grids-col-4 gap-6">
          {users.map((user, index) => (
            <li key={index} className="bg-slate-800 rounded-lg shadow-md text-center">
              <div className='text-white py-7 px-3'>
                
                <div className='flex w-full'><span>Name:</span><p className="font-semibold font-bold text-xl text-center ml-auto">{user.first_name} {user.last_name}</p></div>
                <div className='flex w-full'><span>Username:</span><p className="font-semibold font-bold text-xl ml-auto">{user.username}</p></div>
                <div className='flex w-full'><span>Age:</span><p className="font-semibold font-bold text-xl ml-auto">{user.age}</p></div>
                <div className='flex w-full'><span>Status:</span><p className="font-semibold font-bold text-xl ml-auto">{user.marital_status}</p></div>
              </div>
              <button
                className="bg-red-500 text-white hover:bg-red-600 py-1 w-full"
                onClick={() => deleteUser(user.username)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
