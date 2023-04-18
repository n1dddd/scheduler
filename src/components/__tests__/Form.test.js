import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
    const interviewers = [
        {
            id: 1,
            student: "Sylvia Palmer",
            avatar: "https://i.imgur.com/LpaY82x.png"
        }
    ];

    it("renders without student name if not provided", () => {
        const { getByPlaceholderText } = render(
        <Form interviewers = {interviewers}/>)
        expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
    });

    it("renders with initial student name", () => {
        const { getByTestId } = render(
            <Form interviewers={interviewers} name="Lydia Miller-Jones" />
        )
        expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
    })

    it("validates that the student name is not blank", () => {


          /* 1. Create the mock onSave function */

         /* 2. Render the Form with interviewers and the onSave mock function passed as an onSave prop, the student prop should be blank or undefined */

         /* 3. Click the save button */

        const onSave = jest.fn();

        const {getByText} = render(
            <Form interviewers={interviewers} onSave={onSave} />
        );

        fireEvent.click(getByText("Save"))

        expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
        expect(onSave).not.toHaveBeenCalled();
    })

    it("validates that the interviewer cannot be null", () => {
        /* 1. Create the mock onSave function */

        /* 2. Render the Form with interviewers and the onSave mock function passed as an onSave prop, the interviewer prop should be null */

        /* 3. Click the save button */

        const onSave = jest.fn();

        const { getByText } = render(
            <Form interviewers={interviewers} onSave={onSave} name="Lydia Miller-Jones" interviewer={null} />
        );

        fireEvent.click(getByText("Save"))

        expect(getByText(/please select an interviewer/i)).toBeInTheDocument();
        expect(onSave).not.toHaveBeenCalled();
    })

    it("calls on onSave function when the name and interiewer is defined", () => {
        /* 1. Create the mock onSave function */

        /* 2. Render the Form with interviewers, name and the onSave mock function passed as an onSave prop */

         /* 3. Click the save button */
        const onSave = jest.fn();


         const { getByText, queryByText } = render( 
            <Form 
            name="Lydia Miller-Jones" 
            interviewers={interviewers} 
            value={interviewers[0].id} 
            onSave={onSave}
            />
         );

        fireEvent.click(getByText("Save"));

        expect(queryByText(/student name cannot be blank/i)).toBeNull();
        expect(queryByText(/please select an interviewer/i)).toBeNull();
        expect(onSave).toHaveBeenCalledTimes(1);
        expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);
    })
    it("Submits the name entered by the user", () => {
        const onSave = jest.fn();
        const { getByText, getByPlaceholderText } = render(
            <Form interviewers={interviewers} onSave={onSave} value={1} />
        );

        const input = getByPlaceholderText("Enter Student Name");

        fireEvent.change(input, { target: { value: "Lydia Miller-Jones" } });
        fireEvent.click(getByText("Save"));

        expect(onSave).toHaveBeenCalledTimes(1);
        expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1)
    })
})
