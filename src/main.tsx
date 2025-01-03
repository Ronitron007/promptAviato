import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import InputExamples from './components/input';
// import PasswordExamples from './components/password';
// import SearchExamples from './components/search';
// import TextareaExamples from './components/textarea';
import './index.css';
import { ConfigProvider } from 'antd';

import App from './output/App';
import PaymentSettings from './output/PaymentSettings';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaymentSettings />
    {/* <ButtonExamples /> */}
    {/* <InputExamples /> */}
  </StrictMode>,
);
