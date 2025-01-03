import React, { useState } from 'react';
import Header from './Header';
import PaymentMethodsForm from './PaymentMethodsForm';
import EmailSection from './EmailSection';
import LocationSection from './LocationSection';
import CreditCardsSection from './CreditCards';
import SettingsSection from './SettingsSection';
import ActionButtons from './ActionButton';
import { useForm } from 'react-hook-form';

interface CardInfo {
  label: string;
  cvv: string;
  fullName: string;
  expiryDate: string;
}

const PaymentSettings: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CardInfo>();
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');
  const [selectedCity, setSelectedCity] = useState('New York City, NY');
  const [emailAddresses, setEmailAddresses] = useState(['hello@slothui.com']);
  const [creditCards, setCreditCards] = useState([
    {
      id: '1',
      type: 'visa',
      lastFour: '2212',
      expiry: '08/2028',
      image: 'assets/image_9f623d3c.png',
    },
    {
      id: '2',
      type: 'mastercard',
      lastFour: '2212',
      expiry: '08/2028',
      image: 'assets/image_d8c89dbc.png',
    },
    {
      id: '3',
      type: 'amex',
      lastFour: '2212',
      expiry: '08/2028',
      image: 'assets/image_73ccf785.png',
    },
  ]);

  const [toggleOptions, setToggleOptions] = useState([
    {
      id: 'autoSave',
      label: 'Auto Save Credit Card',
      description: 'Malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet.',
      enabled: true,
    },
    {
      id: 'notify',
      label: 'Notify Credit Card',
      description: 'Imperdiet dui accumsan sit amet. Euismod quis viverra nibh cras.',
      enabled: false,
    },
  ]);

  const onSubmit = async (data: CardInfo) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCard = (id: string) => {
    setCreditCards((cards) => cards.filter((card) => card.id !== id));
  };

  const handleAddEmail = () => {
    setEmailAddresses([...emailAddresses, '']);
  };

  const handleToggleChange = (id: string) => {
    setToggleOptions((options) => options.map((opt) => (opt.id === id ? { ...opt, enabled: !opt.enabled } : opt)));
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-8">
            <PaymentMethodsForm register={register} />
            <EmailSection
              emailAddresses={emailAddresses}
              setEmailAddresses={setEmailAddresses}
              onAddEmail={handleAddEmail}
            />
            <LocationSection
              selectedCity={selectedCity}
              selectedCountry={selectedCountry}
              onCityChange={setSelectedCity}
              onCountryChange={setSelectedCountry}
            />
            <CreditCardsSection creditCards={creditCards} onDeleteCard={handleDeleteCard} />
            <SettingsSection toggleOptions={toggleOptions} onToggleChange={handleToggleChange} />
            <ActionButtons isSubmitting={isSubmitting} />
          </section>
        </form>
      </div>
    </div>
  );
};

export default PaymentSettings;
