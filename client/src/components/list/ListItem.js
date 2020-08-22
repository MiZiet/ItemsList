import React, { useCallback } from "react";
import { Button } from "reactstrap";

const ListItem = (props) => {
  const { id, name, language, description, initRelease } = props.data;
  return (
    <tr>
      <th className="align-middle">{id}</th>
      <th className="align-middle">{name}</th>
      <th className="align-middle">{language}</th>
      <th className="align-middle">{description}</th>
      <th className="align-middle">{initRelease}</th>
      <th>
        <Button onClick={props.deleteOnClick} color="danger">
          Delete
        </Button>
      </th>
    </tr>
  );
};

export default ListItem;
