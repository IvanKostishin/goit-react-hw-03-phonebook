import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
      ></input>
    </>
  );
};

export default Filter;
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
