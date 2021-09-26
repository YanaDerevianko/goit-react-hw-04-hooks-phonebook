import propTypes from "prop-types";
import React from "react";
import { FilterContact } from "./Filter.styled";
export const Filter = ({ onChange }) => {
  return (
    <>
      <p>Find contacts by name: </p>
      <FilterContact type="text" name="filter" onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
