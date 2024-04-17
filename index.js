/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}
function createEmployeeRecord(arr) {
    return {
       firstName: arr[0],
       familyName: arr[1],
       title: arr[2],
       payPerHour: arr[3],
       timeInEvents: [],
       timeOutEvents: []
    };
}


function createTimeInEvent (dayTime) {
    const[date, hour] = dayTime.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour, 10)});
    return this;
}

function createTimeOutEvent (dayTime) {
    if (!this) {
        throw new Error("Employee record is undefined");
    }
    this.timeOutEvents = this.timeOutEvents || [];
    const [date, hour] = dayTime.split(' ');
    this.timeOutEvents.push({type: 'TimeOut', date, hour:parseInt(hour, 10)});
    return this;
}



function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    if(!timeIn || !timeOut) {
        return 0;
    }
    const startTime = parseInt(timeIn.hour, 10);
    const endTime = parseInt(timeOut.hour, 10);
    return(endTime - startTime) / 100;
   
}

function wagesEarnedOnDate(date) {
    const hoursWworked = hoursWorkedOnDate.call(this, date);
    return hoursWworked * this.payPerHour
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

