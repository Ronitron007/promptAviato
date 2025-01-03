import React from 'react';

interface CreditCard {
  id: string;
  type: string;
  lastFour: string;
  expiry: string;
  image: string;
}

interface Props {
  creditCards: CreditCard[];
  onDeleteCard: (id: string) => void;
}

const CreditCardsSection: React.FC<Props> = ({ creditCards, onDeleteCard }) => {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-bold text-slate-800 mb-2">Credit Cards</h3>
      <p className="text-sm text-slate-600 mb-4">You can adjust the settings on your general notification here.</p>
      
      <div className="space-y-4">
        {creditCards.map(card => (
          <div key={card.id} className="flex justify-between items-center border border-slate-200 rounded-2xl p-3">
            <div className="flex items-center">
              <div className="bg-white p-2 mr-3">
                <img src={card.image} alt={card.type} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Ending in {card.lastFour}</p>
                <p className="text-sm text-slate-600">Expired in {card.expiry}</p>
              </div>
            </div>
            <div className="space-x-4">
              <button
                type="button"
                onClick={() => onDeleteCard(card.id)}
                className="text-sm font-bold text-slate-600"
              >
                Delete
              </button>
              <button
                type="button"
                className="text-sm font-bold text-indigo-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="flex items-center text-sm font-bold text-indigo-600"
        >
          <img src="assets/image_259d38f0.png" alt="" className="mr-2" />
          Add New Credit Card
        </button>
      </div>
    </div>
  );
};

export default CreditCardsSection;