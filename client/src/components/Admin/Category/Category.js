import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../js/Action/actionCategory";

const Category = ({category,i}) => {
    const dispatch = useDispatch()
  return (
    <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0">{category.categoryName}</h5>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          onClick={()=>dispatch(deleteCategory(category._id))}
        >
          <i className="fa fa-trash"></i>{" "}
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i className="fa fa-edit"></i>{" "}
        </button>
      </td>
    </tr>
  );
};

export default Category;
