import React, { createContext, useContext, ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormContextProps {
  showNotification: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const showNotification = () => {
    const notification = toast.success('Form submitted!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: 'linear-gradient(to right, #ffac41, #ff4f81)',
        color: '#fff',
      },
    });

    setTimeout(() => {
      toast.dismiss(notification);
    }, 3000);
  };

  return (
    <FormContext.Provider value={{ showNotification }}>
      {children}
      <ToastContainer />
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormContext };
