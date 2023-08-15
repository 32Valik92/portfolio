import './ContactForm.css';

import {joiResolver} from '@hookform/resolvers/joi';
import emailjs from 'emailjs-com';
import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {emailJS} from '../../constants';
import {IContact} from '../../interfaces';
import {contactFormValidator} from '../../validators';

const ContactForm: FC = () => {

   const {reset, handleSubmit, register, formState: {errors, isValid}} = useForm<IContact>({
      mode: 'all',
      resolver: joiResolver(contactFormValidator)
   });

   const [submitStatus, setSubmitStatus] = useState(false); // To monitor the status of submission.

   const {serviceID, templateID, userID} = emailJS;

   // Function for sending Email from WebSite
   const sendEmail: SubmitHandler<IContact> = async (data) => {
      const response = await emailjs.send(serviceID, templateID, data as unknown as Record<string, unknown>, userID);

      setSubmitStatus(response.status === 200);
      reset();
   };

   // Monitor our div after sending
   useEffect(() => {
      if (submitStatus) {
         const timeoutId = setTimeout(() => {
            setSubmitStatus(false);
         }, 10000);

         return () => clearTimeout(timeoutId); // Reset timer after change
      }
   }, [submitStatus]);

   return (
      <div className="contactFormDiv">
         <h2>Contact Me</h2>
         <form onSubmit={handleSubmit(sendEmail)} className={'form'}>
            <div>
               <input type="text" placeholder={'Name'} {...register('userName')}/>
            </div>
            <div>
               <input type="text" placeholder={'Email'} {...register('email')}/>
            </div>
            <div>
               <textarea placeholder={'Message'} {...register('message')}></textarea>
            </div>

            <div className={'formButton'}>
               <button disabled={!isValid}>Submit</button>
            </div>
            {/* If there are more than 0 elements in the error object, we extract the first value from the array of errors. */}
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
         </form>
         {submitStatus && <div>{'You\'re welcome. I will write to you within a day. Thank you.'}</div>}
      </div>
   );
};

export {ContactForm};