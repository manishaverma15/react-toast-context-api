import React, { useState, useCallback, useMemo } from 'react';
import { useFormContext } from '../../context/FormContext';
import './Form.css';

const Form: React.FC = () => {
  const { showNotification } = useFormContext();

  const initialFormData = useMemo(
    () => ({
      name: '',
      email: '',
      phoneNumber: '',
    }),
    []
  );

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted with data:', formData);
      setFormData(initialFormData);

      showNotification();
    },
    [formData, initialFormData, setFormData, showNotification]
  );


  return (
    <form onSubmit={handleSubmit} className="custom-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;
