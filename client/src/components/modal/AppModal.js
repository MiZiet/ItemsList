import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
const AppModal = ({ toggleModal, modal, submit }) => {
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    description: "",
    initRelease: "",
  });

  const { name, language, description, initRelease } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitModalData = () => {
    submit(formData);
    setFormData({
      name: "",
      language: "",
      description: "",
      initRelease: "",
    });
    toggleModal();
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Add new list item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="nameInput">Name</Label>
            <Input
              id="nameInput"
              value={name}
              name="name"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="languageInput">Language</Label>
            <Input
              id="languageInput"
              value={language}
              name="language"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="descriptionInput">Description</Label>
            <Input
              id="descriptionInput"
              value={description}
              name="description"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="releaseInput">Release</Label>
            <Input
              id="releaseInput"
              type="number"
              placeholder="eg. 2010"
              value={initRelease}
              name="initRelease"
              onChange={onChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submitModalData}>
          Add item
        </Button>{" "}
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AppModal;
