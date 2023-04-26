# Interview Scheduler
## Project description

Interview Scheduler is a Single Page Application (SPA) that has been designed to help students keep track of interviews they have with instructors.It has been built using React's built-in and custom hooks, which enables real-time addition, editing, and deletion of appointments. Data is managed using PostgreSQL and an API server. This project underwent test driven development, involving isolated component testing before app-wide integration, and end-to-end user behaviour testing.

## Project Features
- Weekdays available for appointment booking are displayed with spots available.

- Users can choose open time slots to book appointments, typing their name as input, and choosing an available interviewer. 

- Upon appointment creation a user can edit and save an appointment, or delete the appointment altogether. Deletion comes with a warning message prompting the user to confirm their action.

- State is constantly tracked, meaning that the available interview time slots within a day dynamically change upon creation or deletion of an appointment.

## Setup

For full functionality, refer to the instructions below

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API and Database Setup

- Both the API and web app client run concurrently
- Fork and clone the scheduler_api repo, [here](https://github.com/lighthouse-labs/scheduler-api)
 - Follow the instructions in the README
- Navigate to the project root directories (both scheduler and scheduler api, need to have two instances of the terminal running)
- In each root directory, run the command`npm run start` to begin running the API server and scheduler application.

### Home View
!['days-of-week-availability'](https://raw.githubusercontent.com/n1dddd/scheduler/master/docs/scheduler_home.png)
A user is able to see the days of the week available for appointment. Time slots are displayed for each day are displayed, with empty or booked time slots.

### Appointment Form View
!['appointment-form-view'](https://raw.githubusercontent.com/n1dddd/scheduler/master/docs/scheduler_show_form.png)
A user is able to enter their name into the form, and select an interview. Further, cancel and save buttons allow users to exit the form, and save their chosen appointment time slot.

### Appointment Booked Time-Slot
!['booked-appointment-time-slot'](https://raw.githubusercontent.com/n1dddd/scheduler/master/docs/scheduler_show_new_appointment.png)
A booked out time slot for an appointment, with student name, and interview name displayed on the card.

### Appointment Deletion Confirmation
!['appointment-deletion-confirmation'](https://raw.githubusercontent.com/n1dddd/scheduler/master/docs/scheduler_show_confirm.png)
Confirm prompt for user to confirm deletion of interview, with option to cancel.

## Dependencies
    -axios: ^0.20.0
    -classnames: ^2.2.6
    -normalize.css: ^8.0.1
    -react: ^16.9.0
    -react-dom: ^16.9.0
    -react-scripts: 3.4.4
    -babel/core: ^7.4.3
    -storybook/addon-actions: ^5.0.10
    -storybook/addon-backgrounds: ^5.0.10
    -storybook/addon-links: ^5.0.10
    -storybook/addons: "5.0.10
    -storybook/react: ^5.0.10
    -testing-library/jest-dom: ^4.0.0
    -testing-library/react: ^8.0.7
    -testing-library/react-hooks: ^8.0.1
    -babel-loader: 8.1.0
    -dom-testing-library: ^5.0.0
    -prop-types: ^15.8.1
    -react-test-renderer: ^16.9.0
    -sass: ^1.53.0

## Project Stack

__Front-End:__ React, Axios, JSX, HTML, SASS, Javascript
__Back-End:__ Express, Node.js, PostgreSQL
__Testing:__ Storybook, Webpack Dev Server, Jest, Cypress

