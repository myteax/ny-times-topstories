import React, { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { Container, CardGroup, CardColumns, Dropdown } from "react-bootstrap";
import Cards from "./Cards";
import Pigination from "./Pigination2";
import "./App.css";

function App() {
  const [pp, setPp] = useState(0);
  const [result, setResult] = useState(6);

  const page = (x) => {
    setPp(x);
  };

  const dropy = (x) => {
    setResult(x);
  };

  const { data, loading, error } = useFetch();
  let count = data.lenght / 6;

  return (
    <Container>
      <div className="row">
        <div className="col mt-5">
          {" "}
          <Pigination data={data} page1={page} result={result} />
        </div>

        <div className=" mt-5 float-right">
          {" "}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Results per page
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                value="4"
                name="4"
                onClick={() => {
                  dropy(4);
                }}
              >
                4
              </Dropdown.Item>
              <Dropdown.Item
                value="6"
                name="6"
                onClick={() => {
                  dropy(6);
                }}
              >
                6
              </Dropdown.Item>
              <Dropdown.Item
                value="8"
                name="8"
                onClick={() => {
                  dropy(8);
                }}
              >
                8
              </Dropdown.Item>
              <Dropdown.Item
                value="10"
                name="10"
                onClick={() => {
                  dropy(10);
                }}
              >
                10
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </div>
      </div>

      <CardColumns>
        {/* {data.map((data) => {
          return <Cards key={Math.random()} data={data} />;
        })} */}

        {result === 6 && (
          <div>
            {data[0]?.title && <Cards data={data[0 + pp]} />}
            {data[1 + pp]?.title && <Cards data={data[1 + pp]} />}
            {data[2 + pp]?.title && <Cards data={data[2 + pp]} />}
            {data[3 + pp]?.title && <Cards data={data[3 + pp]} />}
            {data[4 + pp]?.title && <Cards data={data[4 + pp]} />}
            {data[5 + pp]?.title && <Cards data={data[5 + pp]} />}
          </div>
        )}
        {result === 4 && (
          <div>
            {data[0]?.title && <Cards data={data[0 + pp]} />}
            {data[1 + pp]?.title && <Cards data={data[1 + pp]} />}
            {data[2 + pp]?.title && <Cards data={data[2 + pp]} />}
            {data[3 + pp]?.title && <Cards data={data[3 + pp]} />}
          </div>
        )}
        {result === 8 && (
          <div>
            {data[0]?.title && <Cards data={data[0 + pp]} />}
            {data[1 + pp]?.title && <Cards data={data[1 + pp]} />}
            {data[2 + pp]?.title && <Cards data={data[2 + pp]} />}
            {data[3 + pp]?.title && <Cards data={data[3 + pp]} />}
            {data[4 + pp]?.title && <Cards data={data[4 + pp]} />}
            {data[5 + pp]?.title && <Cards data={data[5 + pp]} />}
            {data[6 + pp]?.title && <Cards data={data[6 + pp]} />}
            {data[7 + pp]?.title && <Cards data={data[7 + pp]} />}
          </div>
        )}
        {result === 10 && (
          <div>
            {data[0]?.title && <Cards data={data[0 + pp]} />}
            {data[1 + pp]?.title && <Cards data={data[1 + pp]} />}
            {data[2 + pp]?.title && <Cards data={data[2 + pp]} />}
            {data[3 + pp]?.title && <Cards data={data[3 + pp]} />}
            {data[4 + pp]?.title && <Cards data={data[4 + pp]} />}
            {data[5 + pp]?.title && <Cards data={data[5 + pp]} />}
            {data[6 + pp]?.title && <Cards data={data[6 + pp]} />}
            {data[7 + pp]?.title && <Cards data={data[7 + pp]} />}
            {data[8 + pp]?.title && <Cards data={data[8 + pp]} />}
            {data[9 + pp]?.title && <Cards data={data[9 + pp]} />}
          </div>
        )}

        {/* {result === 4 ? fun4:fun6}    */}
      </CardColumns>
      <Pigination data={data} page1={page} result={result} />
    </Container>
  );
}

export default App;
