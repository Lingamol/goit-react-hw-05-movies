import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FilterInputLabel, FilterInput } from './Filter.Styled';
const Filter = ({ filter, onChange }) => {
  const inpuId = shortid.generate();
  return (
    <FilterInputLabel htmlFor={inpuId}>
      Find actor by name
      <FilterInput
        placeholder="Input actor name"
        id={inpuId}
        type="text"
        name="filter"
        onChange={event => {
          onChange(event.target.value);
        }}
        value={filter}
      />
    </FilterInputLabel>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
