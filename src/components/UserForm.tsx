import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    first_name: '',
    last_name: '',
    username: '',
    age: 0,
    marital_status: '',
    is_employed: false,
    is_founder: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);  // for now just log the user
    navigate('/');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={user.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={user.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="marital_status"
          placeholder="Marital Status"
          value={user.marital_status}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="is_employed"
            checked={user.is_employed}
            onChange={e => setUser({ ...user, is_employed: e.target.checked })}
            className="form-checkbox h-5 w-5"
          />
          <span className="ml-2">Employed</span>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
