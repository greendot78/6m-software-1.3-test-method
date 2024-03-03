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

### Kok Leong's notes:

Under the Software Development Life Cycle (SDLC), various types of testing are performed to ensure the quality and functionality of the software. These tests fall under two broad categories: Functional Testing and Non-Functional Testing.

#### Functional Testing

Functional testing is a type of testing which verifies that each function of the software application operates in conformance with the requirement specification. This testing mainly involves black box testing and it is not concerned about the source code of the application.

1. **Unit Testing:** first level of testing and is often performed by developers themselves. It involves testing individual components in isolation.
    Unit testing is performed by developers themselves and is the first level of testing. It involves testing individual components of the software in isolation to ensure that they work as expected. This is typically done using a unit testing framework. For example, in JavaScript, you might use a framework like Jest to write unit tests.

2. **Integration Testing:** testing the interaction between different software modules.
Involves testing the interaction between different software modules to ensure they work correctly together. This can be done in various ways, such as top-down, bottom-up, or sandwich (a combination of top-down and bottom-up), depending on the relationship between modules.
For example, if you have a function that relies on a database, you might write an integration test that checks whether the function correctly queries the database and returns the expected results.

3. **System Testing:** testing the system as a whole.
Involves testing the system as a whole. This is typically done by a separate testing team (not the developers). The purpose of system testing is to evaluate the system's compliance with the specified requirements.
System testing could involve a variety of tests, such as confirming that the system works correctly on different operating systems or that it handles large amounts of data correctly.


4. **Regression Testing:** testing the system to ensure that previously developed and tested software still performs after a change.
Involves testing the system to ensure that previously developed and tested software still performs after a change. If a new feature has been added, testers would ensure that the existing features still work as expected.
This is typically done by running a suite of tests, which should cover all features of the application. Any failures would indicate a regression.


5. **Acceptance Testing:** testing the system with the intent of confirming readiness of the product and customer acceptance.
Involves testing the system with the intent of confirming readiness of the product and customer acceptance. It's the final phase of testing, where the real users have the chance to go hands-on with the software to ensure that it meets their needs.
This could involve beta testing, where the software is rolled out to a small group of users for validation, or user acceptance testing (UAT), where a representative group of end users try the software to make sure it does what it needs to do in real-world scenarios.



#### Non-Functional Testing

Non-functional testing is a type of testing to check non-functional aspects (performance, usability, reliability, etc) of a software application. It is designed to test the readiness of a system as per nonfunctional parameters which are never addressed by functional testing.

1. **Performance Testing:** This involves testing the performance and responsiveness of an application under different loads.
Is done to evaluate the system's performance under a particular load. It can involve stress testing (where the system is pushed beyond its intended capacity to identify break points or performance bottlenecks), load testing (where the system is subjected to expected load), and spike testing (where the system is subjected to extreme increases and decreases in load).
Tools like Apache JMeter, LoadRunner, or Gatling can be used to simulate a large number of users and measure how the system performs.

2. **Usability Testing:** This involves testing the user interface and overall user friendliness of the system.
Involves evaluating the software by testing it on users to make sure it's intuitive and easy to use. This can involve tasks like checking how easy it is for users to complete desired actions, how pleasing the interface is, and how easy it is for new users to understand the system.
This is typically done by observing users as they interact with the system, and then collecting feedback on their experience.

3. **Security Testing:** This involves testing the system for vulnerabilities and risks in the system.
Is done to check how well the system protects against unauthorized access, hacks, and other potential security breaches. This can involve penetration testing (where testers try to 'hack' the system to find vulnerabilities), checking encryption methods, and testing for SQL injection or cross-site scripting attacks.
Tools like OWASP ZAP or Nessus can be used to help with security testing.

4. **Compatibility Testing:** This involves testing how well the system performs in different environments, web browsers, hardware, operating systems, etc.
Is done to ensure that the software can run in different environments, including different hardware, operating systems, browsers, etc. This involves testing the software under various conditions and ensuring it works as expected.
This can be done manually, by setting up tests on different systems, or it can be automated using tools like BrowserStack or Sauce Labs.

5. **Reliability Testing:** This involves testing the ability of the system to function without failure for a specified period of time in a particular environment.
Is done to check if the software can perform a failure-free operation for a specified period of time in a particular environment. The goal is to discover potential bugs and issues that could affect the software's functionality over time.
This can involve running the system under normal conditions for a long period of time, or using tools to simulate a long period of time, to see if any issues arise.

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
