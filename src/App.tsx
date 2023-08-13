import React from 'react';
import Form from './components/Form/Form';
import { FormProvider } from '../src/context/FormContext';

const App: React.FC = () => {
  return (
    <FormProvider>
      <div>
        <h1 style={{ textAlign: 'center' }}>React Form with Toast Notification</h1>
        <Form />
      </div>
    </FormProvider>
  );
};

export default App;
