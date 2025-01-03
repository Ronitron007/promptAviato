import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CardInfo {
  label: string;
  cvv: string;
  fullName: string;
  expiryDate: string;
}

interface Props {
  register: UseFormRegister<CardInfo>;
}

const PaymentMethodsForm: React.FC<Props> = ({ register }) => {
  return (
    <>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Payment Methods</h2>
          <p className="text-slate-600">Manage your payment methods notifications in here.</p>
        </div>
        <img src="assets/image_e44c94ae.png" alt="payment methods" />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-bold text-slate-800">Label</span>
            <div className="mt-1 relative rounded-full border border-slate-300">
              <input
                {...register('label', { required: true })}
                className="w-full p-3 rounded-full"
                defaultValue="Azunyan Senpai"
              />
              <img src="assets/image_df7ba3ba.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-800">Full Name</span>
            <div className="mt-1 relative rounded-full border border-slate-300">
              <input
                {...register('fullName', { required: true })}
                className="w-full p-3 rounded-full"
                defaultValue="1234 5678 9012 0000"
              />
              <img src="assets/image_72a6ea09.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </label>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-bold text-slate-800">CVV</span>
            <div className="mt-1 relative rounded-full border border-slate-300">
              <input
                {...register('cvv', { required: true, pattern: /^[0-9]{3,4}$/ })}
                className="w-full p-3 rounded-full"
                defaultValue="549"
              />
              <img src="assets/image_2a835a40.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-800">Expiry Date</span>
            <div className="mt-1 relative rounded-full border border-slate-300">
              <input
                {...register('expiryDate', { required: true })}
                className="w-full p-3 rounded-full"
                defaultValue="11 / 2024"
              />
              <img src="assets/image_6dbfcec7.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsForm;