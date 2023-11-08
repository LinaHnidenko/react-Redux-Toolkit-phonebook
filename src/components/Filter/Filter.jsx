import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <label className={css.filterlabel}>
        Find contacts by name
        <input
          className={css.filterinput}
          type="text"
          // value={filter}
          onChange={handleFilterChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </>
  );
};
