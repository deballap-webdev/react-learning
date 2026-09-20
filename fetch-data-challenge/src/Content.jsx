import React from "react";

const Content = ({ listArray = [] }) => {
  return (
    <>
      {listArray.length ? (
        <table>
          {listArray.map((item, index) => {
            console.log(item);
            return (
              <tbody key={index + 1}>
                <tr>
                  {Object.keys(item).map((key, index) => (
                    <td key={index + 1}>{JSON.stringify(item[key])}</td>
                  ))}
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <p>"List Is Empty"</p>
      )}
    </>
  );
};

export default Content;
