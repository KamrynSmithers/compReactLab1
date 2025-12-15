import { useState } from 'react'

import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from "./components/ProductDisplay/ProductDisplay"
function App() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
  };
  const product = {
     id: '1',
     name: 'Wireless Headphones',
     price: 199.99,
     description: 'High-quality wireless headphones with noise cancellation.',
     imageUrl: 'https://example.com/headphones.jpg',
     inStock: true
   };

  return (
    <div className="p-8">
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">
        <p> Last login: 2 hours ago </p> 
        </div>
      </UserProfileCard>

    </div>
  );
}

export default App;
