import React, { useEffect, useState } from "react";
import { Table, Button, Nav } from "reactstrap";
import ListItem from "./ListItem";
import AppModal from "../modal/AppModal";

const List = () => {
  const [state, setState] = useState({ modalIsOpen: false, listItems: [] });
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const fetchAllDataFromAPI = async () => {
    const response = await fetch("/api/data/");
    const data = await response.json();
    setState({ ...state, listItems: data });
  };

  const deleteItemFromAPI = async (id) => {
    const response = await fetch(`/api/data/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchAllDataFromAPI();
  };

  const addItemToAPI = async (newItem) => {
    const response = await fetch(`/api/data/`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const newItemsList = state.listItems.push(newItem);
    fetchAllDataFromAPI();
  };

  useEffect(() => {
    fetchAllDataFromAPI();
  }, []);

  return (
    <>
      <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Language</th>
              <th>Description</th>
              <th>Release</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.listItems.map((item, index) => {
              return (
                <ListItem
                  data={item}
                  key={index}
                  deleteOnClick={() => deleteItemFromAPI(item.id)}
                />
              );
            })}
          </tbody>
        </Table>
        <Button className="float-right" color="primary" onClick={toggleModal}>
          Add New List Item
        </Button>
      </main>
      <AppModal
        list={state.listItems}
        modal={modal}
        toggleModal={toggleModal}
        submit={addItemToAPI}
      />
    </>
  );
};

export default List;
