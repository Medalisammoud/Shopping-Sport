import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../js/Action/actionCategory";

const EditAddCategory = () => {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [addEditCategory, setAddEditCategory] = useState({categoryName : ''});
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <Button variant="outline-warning"
        onClick={handleShow}
      >
        Add Category
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
               value={addEditCategory.categoryName}
               onChange={(e)=>setAddEditCategory({categoryName : e.target.value})}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
                dispatch(addCategory(addEditCategory))
                handleClose();
            }}
          >
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditAddCategory;
