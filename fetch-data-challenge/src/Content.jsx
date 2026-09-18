import React from "react";

const Content = ({ listArray = [] }) => {
  return (
    <>
      {listArray.length ? (
        <ul>
          {listArray.map((item) => (
            <li key={item.key}>{item.content}</li>
          ))}
        </ul>
      ) : (
        <p>"List Is Empty"</p>
      )}
    </>
  );
};

export default Content;
