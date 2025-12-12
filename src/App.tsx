import { useState } from 'react'

import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
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
