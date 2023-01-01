//Section2 2nd part
import React from "react";
function Employee() {
  class employee {
    setValues(id, name, dept, salary) {
      this.id = id;
      this.name = name;
      this.dept = dept;
      this.salary = salary;
    }
    getValues() {
      console.log("Employee id is", this.id);
      console.log("Employee name is", this.name);
      console.log("Employee dept is", this.dept);
      console.log("Employee salary is", this.salary);
    }
  }
  const obj1 = new employee();
  obj1.setValues(2121, "Suleman", "IT", 45000);
  obj1.getValues();

  const obj2 = new employee();
  obj2.setValues(1222, "Ahmad", "CS", 39000);
  obj2.getValues();
  
  const obj3 = new employee();
  obj3.setValues(5432, "Ayub", "SE", 42000);
  obj3.getValues();
  return (
    <>
      <h1>Create a program that creates 3 Employee objects</h1>
    </>
  );
}

export default Employee;