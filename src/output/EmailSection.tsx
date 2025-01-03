import React from 'react';

interface Props {
  emailAddresses: string[];
  setEmailAddresses: (emails: string[]) => void;
  onAddEmail: () => void;
}

const EmailSection: React.FC<Props> = ({ emailAddresses, setEmailAddresses, onAddEmail }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800">Email Address</h3>
          <p className="text-sm text-slate-600">Please enter your email address details here.</p>
        </div>
        <div className="space-y-2">
          {emailAddresses.map((email, index) => (
            <div key={index} className="flex items-center border border-slate-300 rounded-full p-3">
              <img src="assets/image_1fd5d9e8.png" alt="" className="mr-2" />
              <input 
                type="email"
                value={email}
                onChange={(e) => {
                  const newEmails = [...emailAddresses];
                  newEmails[index] = e.target.value;
                  setEmailAddresses(newEmails);
                }}
                className="flex-1"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={onAddEmail}
            className="flex items-center text-sm font-bold text-indigo-600"
          >
            <img src="assets/image_7896927.png" alt="" className="mr-2" />
            Add Another Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;