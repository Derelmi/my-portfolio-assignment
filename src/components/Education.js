import React from "react";
import { Button } from "react-bootstrap";

const Education = () => {
  return (
    <div id="education" className="mt-2">
      <h2 className="text-center">EDUCATIONAL BACKGROUND</h2>
      <p className="text-center">Schools Attended</p>

      <div className="table-responsive container container-fluid">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col" colspan="2" class="text-center">
                CROWN PRINCE INTERNATIONAL (2002-2017)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Math</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>Social-Studies</td>
              <td>English</td>
            </tr>
            <tr>
              <td>French</td>
              <td>ICT</td>
            </tr>
            <tr>
              <td>Twi</td>
              <td>RME</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-responsive container container-fluid">
        <table className="table">
          <thead className="table-secondary">
            <tr>
              <th scope="col" colspan="2" className="text-center">
                ST.AUGUSTINE'S COLLEGE (2018-2020)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Core-Math</td>
              <td>Inter-Science</td>
            </tr>
            <tr>
              <td>Social-Studies</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>Elect-Math</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>Chemistry</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive container container-fluid">
        <table className="table">
          <thead class="table-dark">
            <tr>
              <th scope="col" colspan="2" className="text-center">
                UNIVERSITY OF GHANA,LEGON(2021-2024)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSc.INFORMATION TECHNOLOGY</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education