"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from  '@emailjs/browser';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  message: string;
}

interface FormStatus {
  isValid: boolean;
  errorMessage: string;
  isSubmitting: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isValid: true,
    errorMessage: '',
    isSubmitting: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form here if needed
    // For simplicity, let's assume all fields are required
    const isValid = Object.values(formData).every((field) => field.trim() !== '');

    if (!isValid) {
      setFormStatus({
        isValid: false,
        errorMessage: 'All fields are required.',
        isSubmitting: false,
      });
      return;
    }

    // Set the form as submitting
    setFormStatus({ ...formStatus, isSubmitting: true });

    // Use emailjs to send the email
    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // replace with your service ID
        'YOUR_TEMPLATE_ID', // replace with your template ID
        formData,
        'YOUR_USER_ID' // replace with your user ID
      );

      // Reset the form and status
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        message: '',
      });

      setFormStatus({
        isValid: true,
        errorMessage: '',
        isSubmitting: false,
      });

      console.log('Email sent successfully!', response);
    } catch (error) {
      console.error('Error sending email:', error);

      // Handle error and set form status accordingly
      setFormStatus({
        isValid: false,
        errorMessage: 'Error sending email. Please try again later.',
        isSubmitting: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto p-4'>
      {/* Display error message if form is invalid */}
      {!formStatus.isValid && <div style={{ color: 'red' }}>{formStatus.errorMessage}</div>}

      {/* Name Field */}
     
      <div className="mb-4">
        <label className="block text-right font-tajawal text-sm font-light mb-2" htmlFor="name">
          الاسم
        </label>
        <input
          className="w-full p-2 border text-right custom-input rounded focus:border-none"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="الاسم"
          // ... other attributes ...
        />
        {/* ... validation error message ... */}
      </div>

      {/* ... other form fields ... */}
      
       
      <label className= "block text-right text-sm font-light mb-2">
        رقم الهاتف
        </label>
        <input
          className="w-full p-2 text-right border rounded custom-input"
    
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="رقم الهاتف"
        />
        <div>
         <label className= "block text-right text-sm font-light mb-2">
        البريد الالكتروني
        </label>
        <input
                  className="w-full text-right p-2 border rounded custom-input"

          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="البريد الالكتروني"
        />
       <label className= "block text-right text-sm font-light mb-2">
        العنوان بالتفصيل
        <input
                  className="w-full p-2 text-right border rounded custom-input"

          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="العنوان بالتفصيل"
        />
      </label>
      </div>
      {/* Message Field */}
      <label className= "block text-right text-sm font-light mb-2 focus:outline-none">
        الرسالة
        </label>
        <textarea
                  className="w-full text-right p-2 border h-[50px] rounded custom-input"

          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="الرسالة"
        />
      
      
      {/* Submit button */}
      <p>
        <input
          className=" submitbutton cursor-pointer font-tajawal h-[30px]"
          id="form-submit"
          type="submit"
          value="ارسال"
        />
      </p>

      {/* Response output */}
      <div className="w-full text-red-500" aria-hidden="true">
        One or more fields have an error. Please check and try again.
      </div> 
    </form>
  );
};

export default ContactForm;
