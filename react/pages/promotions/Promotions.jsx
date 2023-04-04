import { Link } from "react-router-dom";
import {Header} from "../../components/Header/Header";
import { useEffect, useState } from "react";


export const Promotions = function () {
    const [promotions, setPromotions] = useState([])
  return (
    <>
        <Header></Header>
      <h1>Nos promotions du moment</h1>
      <table className="promotions-table">
        <tbody>
          {promotions.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={"/description/" + product.id}>Voir description</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
