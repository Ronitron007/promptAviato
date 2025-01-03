import React from 'react';

interface Props {
  isSubmitting: boolean;
}

const ActionButtons: React.FC<Props> = ({ isSubmitting }) => {
  return (
    <div className="flex justify-end space-x-4">
      <button type="button" className="px-6 py-2 border border-slate-300 rounded-full text-sm font-bold text-slate-600">
        Cancel
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-indigo-600 rounded-full text-sm font-bold text-white flex items-center"
      >
        {isSubmitting ? 'Saving...' : 'Save Changes'}
        {!isSubmitting && <img src="assets/image_4ef3f6ea.png" alt="" className="ml-2" />}
      </button>
    </div>
  );
};

export default ActionButtons;
