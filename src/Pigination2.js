import React from "react";
import { Pagination } from "react-bootstrap";
import { Fragment } from "react";

const Pigination2 = (props) => {
  let pages = Math.ceil(props.data.length / 6);

  return (
    <div>
      <Pagination>
        {props.result === 6 && (
          <React.Fragment>
            <Pagination.Item
              onClick={() => {
                props.page1(0);
              }}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(6);
              }}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(12);
              }}
            >
              {3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(18);
              }}
            >
              {4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(24);
              }}
            >
              {5}
            </Pagination.Item>
          </React.Fragment>
        )}
        {props.result === 4 && (
          <React.Fragment>
            <Pagination.Item
              onClick={() => {
                props.page1(0);
              }}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(4);
              }}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(8);
              }}
            >
              {3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(12);
              }}
            >
              {4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(16);
              }}
            >
              {5}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(20);
              }}
            >
              {6}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(24);
              }}
            >
              {7}
            </Pagination.Item>
          </React.Fragment>
        )}
        {/* Pigination for  8  */}
        {props.result === 8 && (
          <React.Fragment>
            <Pagination.Item
              onClick={() => {
                props.page1(0);
              }}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(8);
              }}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(16);
              }}
            >
              {3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(24);
              }}
            >
              {4}
            </Pagination.Item>
          </React.Fragment>
        )}
        {/* Pigination for  10  */}
        {props.result === 10 && (
          <React.Fragment>
            <Pagination.Item
              onClick={() => {
                props.page1(0);
              }}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(10);
              }}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                props.page1(20);
              }}
            >
              {3}
            </Pagination.Item>
          </React.Fragment>
        )}
      </Pagination>
    </div>
  );
};

export default Pigination2;
