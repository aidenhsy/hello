import React, { useEffect } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listUsers } from "../actions/userActions";
import components from "../components";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  return (
    <div>
      <ButtonGroup className="mb-2 p-3">
        <Button>All</Button>
        <Button variant="secondary">English</Button>
        <Button variant="secondary">French</Button>
        <Button variant="secondary">Spanish</Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2 p-3 float-right">
        <DropdownButton
          as={ButtonGroup}
          title="Relevance"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Rating</Dropdown.Item>
          <Dropdown.Item eventKey="2">Review Count</Dropdown.Item>
          <Dropdown.Item eventKey="2">Price Hi-Lo</Dropdown.Item>
          <Dropdown.Item eventKey="2">Price Lo-Hi</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      {users.map((user) => {
        return user.isTeacher && <components.User key={user._id} user={user} />;
      })}
    </div>
  );
};

export default HomeScreen;
