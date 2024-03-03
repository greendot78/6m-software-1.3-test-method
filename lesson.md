## Brief

### Lesson Overview

We will be spending the first hour to learn about software testings, and next 2 hours on quick JavaScript lesson and assignment. At the end of the assignment, learners will see a short demo on unit test within the [assignment](./assignment) folder.

Command to run test:

```sh
npm run test 
```

If you face issue running `jest` in the `devDependency`, a quick remedy is to run `npm i -g jest` first.

> Note for instructors
> - Run all `.js` files with `node` in the Terminal.
> - While running JS code, use debugging terminal to visually guide learners how codes are executed.

---

## Part 1 - Software Development Life Cycle

<img src="./assets/sdlc.png" />

Source: https://www.javatpoint.com/software-engineering-software-development-life-cycle

1. *Requirement* Analysis - Gathering the business and technical requirements.
1. *Defining* - Defining the functional and non-functional requirements.
1. *Designing* - Translating the functional requirements into workable tasks.
1. *Coding* - Writing code a.k.a. development phase.
1. *Testing* - Ensuring the outcome of development aligns with the defined requirements.
1. *Deployment* - Going live into production.
1. *Maintenance* - Monitoring systems health and fix errors when arises.

---

## Part 2 - Software Testing Methods

<img src="./assets/test-diagram.png" />

### Functional Testings

1. *Unit Test* - An isolation testing targeting at the smallest piece of logic in the software.
2. *Integration Test* - Testing multiple software modules together as a group.
3. *Acceptance Test* - Testing the functionality of the software by end users before launch.

### Non-functional Testings

1. *Performance Test* - A non functional test to determine the stability, speed, responsiveness and resilience of the system.
    1. Load Test - Simulate an increasing amount of traffics/requests sent to the system.
    1. Stress Test - Determine the peak load and/or how much requests the system can receive.
    1. Endurance Test - Determine the behaviour of the system at the peak load over time.
1. *Security Test* -
    1. Dependency Vulnerabilities - Scanning for vulnerabilities introduced by dependencies.
    1. Secrets & Data Storage Strategy - Determine how secure are secrets and sensitive data being stored.
---

---
### Kok Leong's notes:

Under the Software Development Life Cycle (SDLC), various types of testing are performed to ensure the quality and functionality of the software. These tests fall under two broad categories: Functional Testing and Non-Functional Testing.

#### Functional Testing

Functional testing is a type of testing which verifies that each function of the software application operates in conformance with the requirement specification. This testing mainly involves black box testing and it is not concerned about the source code of the application.

1. **Unit Testing:** This is the first level of testing and is often performed by developers themselves. It involves testing individual components in isolation.
2. **Integration Testing:** This involves testing the interaction between different software modules.
3. **System Testing:** This involves testing the system as a whole.
4. **Regression Testing:** This involves testing the system to ensure that previously developed and tested software still performs after a change.
5. **Acceptance Testing:** This involves testing the system with the intent of confirming readiness of the product and customer acceptance.

#### Non-Functional Testing

Non-functional testing is a type of testing to check non-functional aspects (performance, usability, reliability, etc) of a software application. It is designed to test the readiness of a system as per nonfunctional parameters which are never addressed by functional testing.

1. **Performance Testing:** This involves testing the performance and responsiveness of an application under different loads.
2. **Usability Testing:** This involves testing the user interface and overall user friendliness of the system.
3. **Security Testing:** This involves testing the system for vulnerabilities and risks in the system.
4. **Compatibility Testing:** This involves testing how well the system performs in different environments, web browsers, hardware, operating systems, etc.
5. **Reliability Testing:** This involves testing the ability of the system to function without failure for a specified period of time in a particular environment.


---

## Part 3 - Group Discussion

Understanding Part 1 and Part 2, learners will be grouped in a team of 3 or 4 to research (google), discuss and fulfil the blanks in the following table. Learners may simple use google docs for this.

|The Test|When? (SDLC)|How are they performed?|
|----|----|---|
|Unit Test|Enter 1 to 7|3 sentences max|
|Integration Test|Enter 1 to 7|3 sentences max|
|Acceptance Test|Enter 1 to 7|3 sentences max|
|Performance Test|Enter 1 to 7|3 sentences max|
|Security Test|Enter 1 to 7|3 sentences max|

> Bonus Question: Are there any other forms of software/system testings that are not listed in this lesson?

### Example
|The Test|When? (SDLC)|How are they performed?|
|----|----|---|
|Security Test|5,6,7 and 7|It can be done with automation, engage testing companies, or AI|

---

## Part 4 - Data Types in JavaScript

The primitive data types of JavaScript are:
- number
- string
- boolean
- null
- undefined
- symbol (advanced, not covering)

The composite types are:
- object
- array

Check out [this](./src/data-types.js) JS file.

---

## Part 5 - Arrays

Arrays consist of indices and values.

<img src="./assets/array.jpeg" />
Source: [Arrays](https://www.geeksforgeeks.org/c-sharp-arrays/)

Look at the basic use of array [here](./src/arrays.js).

---

## Part 6 - Objects

Objects are made up with key-value pairs that represent properties and values. In some programming languages, the name of the data structure is "Dictionary". In JavaScript, they are called objects.

Look at the basic use of object [here](./src/objects.js).
