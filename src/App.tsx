import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from "./components/ProductDisplay/ProductDisplay"

function App() {
  const user = {
    id: '1',
    name: 'Kamryn Smithers',
    email: 'kamrynaliecesmithers@gmail.com',
    role: 'Software Engineer',
    avatarUrl:'./public/moneyMan.jpg'
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: './src/assets/appleheadphones.jpg',
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
          <p>Last login: 2 hours ago</p> 
        </div>
      </UserProfileCard>

      <div className="next">
        <ProductDisplay 
          product={product}
        />
      </div>
    </div>
  );
}

export default App;