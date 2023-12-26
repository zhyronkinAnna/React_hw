import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrorMessageViiew from './ErrorMessageViiew';

const initialValues = {
    name: '',
    email: '',
    message: ''
}; 

const MailSchema = Yup.object().shape({
    name: Yup.string().min(2).max(20).required('Name is required'),
    email: Yup.string().email().required(),
    message: Yup.string().required()
});

const Mail = () => {

    ///
    const handlerSubmit = (values, form) => {
        console.log(values);
        form.resetForm();
    }

    return (
        <div>
            <Formik initialValues={initialValues} 
                    onSubmit={handlerSubmit}
                    validationSchema={MailSchema}>
                {(props) => 
                    <Form onSubmit={props.handleSubmit}>
                        <div>
                            <Field type="text" name="name" onChange={props.handleChange}/>
                            <ErrorMessage name="name" component={ErrorMessageViiew}/>
                            {/* {props.errors.name} */}
                        </div>
                        <div>
                            <Field type="email" name="email" onChange={props.handleChange}/>
                        </div>
                        <div>
                            <Field name="message" as="textarea" onChange={props.handleChange}/>
                        </div>

                        <button type="submit">send</button>
                    </Form>
                }
            </Formik>
        </div>
    );
}

export default Mail;
