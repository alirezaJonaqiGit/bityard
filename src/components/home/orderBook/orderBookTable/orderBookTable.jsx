import { useContext } from "react";

function OrderBookTable(props) {
  const ame = (array) => {
    let x = Number(array[0]) * Number(array[1]);
    return x.toFixed(5)
  }

  return (
    <>
      <table className="orderBook_table">
        <tbody className="orderBook_tableBody">
          {
            props.data.map((data, index) => {
              return(
                <tr key={index} className="orderBook_tableBodyRow">
                  <td className={`orderBook_tableCell ${props.type}`}>{data[0]}</td>
                  <td className="orderBook_tableCell">{data[1]}</td>
                  <td className="orderBook_tableCell">{ame(data)}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default OrderBookTable;