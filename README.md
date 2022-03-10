# robots

Information and mantenaince of Software Robots.

## method

This work with the GAP protocols for Robot design. The Robot may inform of it activity with the next information:

- **robot** name of the robot.
- **version** version of the robot
- **device** device ID where is working the robot
- **user** user name or email used by the robot
- **status** one of this options ().
- **action** the action is going to do.
- **message** information about the action. If status is error, describe the error and solution.

## installation

´´´bash
npm install moodrobotics/robots
´´´

create file *config.js*
´´´javascript
exports.robotSetup = {
    name: "",
    version: "",
    host: 'roberta.tolentinoabogados.com',
    port: 1881,
    path: '/robot',
    method: 'POST',
};
´´´

## use

create *config.js* file and write the installation info.
