import React from 'react';

interface ToggleOption {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface Props {
  toggleOptions: ToggleOption[];
  onToggleChange: (id: string) => void;
}

const SettingsSection: React.FC<Props> = ({ toggleOptions, onToggleChange }) => {
  return (
    <div className="mb-8">
      {toggleOptions.map(option => (
        <div key={option.id} className="flex items-start mb-4">
          <button
            type="button"
            onClick={() => onToggleChange(option.id)}
            className={`w-12 h-6 rounded-full p-1 mr-4 ${
              option.enabled ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                option.enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">{option.label}</h4>
            <p className="text-sm text-slate-600">{option.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsSection;