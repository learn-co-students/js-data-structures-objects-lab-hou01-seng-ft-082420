// Write your solution in this file!

const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return {...driver, ...{[key]: value}}
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    let object = {...driver};
    delete object[key];
    return object;
  }

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver
  }