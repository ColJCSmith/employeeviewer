import React from "react";
import EmployeeData from "./EmployeeDetail";
import API from "../utils/API";


class OmdbContainer extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    API.search()
      .then((response) => {
        let employeedata = response.data.results;
        let employeeRecordstemp = [];
        console.log(employeedata)
        for (let i = 0; i < employeedata.length; i++) {
          let efile = {
            name: employeedata[i].name.first + " " + employeedata[i].name.last,
            email: employeedata[i].email,
            image: employeedata[i].picture.medium,
            city: employeedata[i].location.city,
            dob: employeedata[i].dob.date,
          };
          employeeRecordstemp.push(efile);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default OmdbContainer;
