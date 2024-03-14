// Write your solution in this file!
// Write your solution in this file!
const employee = {
    name : "Johny",
    streetAddress: 'Juja'
};


function updateEmployeeWithKeyAndValue(employee, key, value ){
let newEmployee = {...employee};

newEmployee[key]= value;

return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]= value ;

}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};

    if (key in newEmployee){
        delete newEmployee[key];
    }

    return newEmployee;


}

function destructivelyDeleteFromEmployeeByKey(employee, key ){

    if (key in employee){
        delete employee[key];

    }

}