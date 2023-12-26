import React from 'react';
import {Button, Modal, Form, Input} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';

const CallMe = () => {
    const [form] = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
   
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handlerSubmit = (values) => {
        console.log(form);
        form.resetFields();
        handleCancel();
    };

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
        <Modal title="Basic Modal" 
               open={isModalOpen} 
               onCancel={handleCancel} //works while X pressing
               footer={null}
        >
            <Form onFinish={handlerSubmit} form={form}>
                <Form.Item name="name" 
                    rules={[
                     { 
                        required: true,
                        message: "Vvedy svoy name"
                     },
            ]}>
                     <Input/>
                </Form.Item>

                <Form.Item name="phone">
                     <Input/>
                </Form.Item>

                <Button type="primary" htmlType="submit">Send</Button>

            </Form>
        </Modal>
        </>
    );
};


export default CallMe;
