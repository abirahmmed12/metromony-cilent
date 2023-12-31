import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Swal from 'sweetalert2';



const Checkout = () => {
  const { user } = useContext(AuthContext);

 
  const biodataId = '6563420e9835b66b39b3844a';
  const selfBiodataId = '...'; 
  const selfEmail = user?.email || '';

 
  const validationSchema = Yup.object().shape({
    stripeCardNumber: Yup.string().required('Stripe Card Number is required'),
  });

 
  const handleSubmit = (values, { setSubmitting }) => {
   
    console.log('Form submitted:', values);
  
   
    Swal.fire('Request Send!');
  
   
  };

  return (
    <div className="container mx-auto p-8 max-w-xl border">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
      <Formik
        initialValues={{
          biodataId,
          selfBiodataId,
          selfEmail,
          stripeCardNumber: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="grid grid-cols-1 gap-4">
          <div>
            <label className="border block text-sm font-medium text-gray-700">Biodata ID:</label>
            <Field type="text" name="biodataId" readOnly className="form-input mt-1 block w-full" />
          </div>

          <div>
            <label className="border block text-sm font-medium text-gray-700">Self Biodata ID:</label>
            <Field type="text" name="selfBiodataId" readOnly className="form-input mt-1 block w-full" />
          </div>

          <div>
            <label className="border block text-sm font-medium text-gray-700">Self Email:</label>
            <Field type="text" name="selfEmail" readOnly className="form-input mt-1 block w-full" />
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700">Stripe Card Number:</label>
            <Field type="text" name="stripeCardNumber" className="border form-input mt-1 block w-full" />
            <ErrorMessage name="stripeCardNumber" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
