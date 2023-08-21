import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import C1 from "../components/img.jpeg";
function FunctionalComponent() {
  let click = () => {
    document.getElementById("i1").innerHTML = "Function event handled";
  };
  return (
    <div className="bg-warning outerDiv">
      <div className=" innerDiv">
        <h1 className="text-white text-center">Welcome to REACT JS</h1>
        <h2 className="text-center">
          We are here to learn stylings using bootstrap and css in React
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          porro consectetur id doloribus fuga cum amet quam veritatis vero
          numquam dolorem aperiam vitae iure corrupti! Incidunt labore possimus
          dolores quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          porro consectetur id doloribus fuga cum amet quam veritatis vero
          numquam dolorem aperiam vitae iure corrupti! Incidunt labore possimus
          dolores quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          porro consectetur id doloribus fuga cum amet quam veritatis vero
          numquam dolorem aperiam vitae iure corrupti! Incidunt labore possimus
          dolores quos.
        </p>
        <img src={C1} alt="image" />
        <h1 id="i1" className="text-white bg-primary"></h1>

        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Amith</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Amith</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Amith</td>
            <td>25</td>
          </tr>
        </table>
        <div className="text-center">
          <button className="btn btn-success button" onClick={click}>
            Click Event in function
          </button>
        </div>
      </div>
    </div>
  );
}

export default FunctionalComponent;
