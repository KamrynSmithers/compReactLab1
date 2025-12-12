// components/UserProfileCard/UserProfileCard.tsx
import React from 'react';
import { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
          {showEmail && (
            <p className="text-gray-600">{user.email}</p>
          )}
          {showRole && (
            <p className="text-sm text-gray-500 mt-1">{user.role}</p>
          )}
        </div>
      </div>

      {children && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {children}
        </div>
      )}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

