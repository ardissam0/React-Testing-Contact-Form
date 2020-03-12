import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

// test('renders correctly', () => {
//     render(<ContactForm />);
// });
// test('contact form has first name', () => {
//     const { getByText } = render(<ContactForm />);

//     const firstName = getByText(/first name*/i);
//     expect(firstName).toBeInTheDocument();
// }); 

// test('contact form has last name', () => {
//     const { getByText } = render(<ContactForm />);

//     const lastName = getByText(/last name*/i);
//     expect(lastName).toBeInTheDocument();
// }); 

// test('contact form has email', () => {
//     const { getByText } = render(<ContactForm />);

//     const email = getByText(/email*/i);
//     expect(email).toBeInTheDocument();
// }); 

test('add contact info correctly', () => {
    const { getByLabelText, findAllByText } = render(<ContactForm />);

    //query for the form inputs
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //fireEvent function from RTL to fill in the input
    fireEvent.change(firstNameInput, { 
        target: { name: 'firstName', value: 'Samuel' } 
    });
    fireEvent.change(lastNameInput, { 
        target: { name: 'lastName', value: 'Ardis' } 
    });
    fireEvent.change(emailInput, { 
        target: { name: 'email', value: 'ardiss@mail.gvsu.edu' } 
    });
    fireEvent.change(messageInput, { 
        target: { name: 'message', value: 'I love coding' } 
    });
    //assertion
    findAllByText(/Samuel/i);
});

