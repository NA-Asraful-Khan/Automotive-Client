import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container p-20'>
            <h1>FAQ</h1>
            <Accordion className='p-8' defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='border-2 border-red-500 rounded-lg'><h5>Automotive Parts Manufacturing Co. ship Internationally?</h5></Accordion.Header>
                    <Accordion.Body className='border-2 border-red-500 rounded-lg'>
                        <p>In 2021 Automotive Parts Manufacturing Co. had to rethink shipping Internationally.  International orders were taking too long to process and expectations too high as far as how quick international customer's orders would be received.   We will no longer process orders shipping outside of the United States.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='border-2 border-red-500 rounded-lg'><h5>How does Automotive Parts Manufacturing Co. ship orders?</h5></Accordion.Header>
                    <Accordion.Body className='border-2 border-red-500 rounded-lg'>
                        <p>UPS on orders under 150 lbs. Anything over that weight we need to use truck freight.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='border-2 border-red-500 rounded-lg'><h5>How is the shipping rate determined.</h5></Accordion.Header>
                    <Accordion.Body className='border-2 border-red-500 rounded-lg'>
                        <p>We determine shipping by the weight of your order and the distance it is shipping.</p>
                        <p>These charges should be calculated automatically online and clearly shown before order is complete.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='border-2 border-red-500 rounded-lg'><h5>Do you charge tax on orders?</h5></Accordion.Header>
                    <Accordion.Body className='border-2 border-red-500 rounded-lg'>
                        <p>We do not charge sales tax on orders shipping outside of New Jersey. Orders shipped within The State of New Jersey are charged state sales tax. If you are located within The State of New Jersey and are tax exempt, please contact us prior to ordering</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='border-2 border-red-500 rounded-lg'><h5>Do you accept Purchase Orders?</h5></Accordion.Header>
                    <Accordion.Body className='border-2 border-red-500 rounded-lg'>
                        <p>For qualified companies we accept Purchase Orders and you can pay for your order in 30 days. Simply contact us with your credit references and we can usually open your account very quickly.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;