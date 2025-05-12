import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import style from './SearchBox.module.css';

const SearchBox = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.filter);

return (
    <label className={style.label}>
    Find contacts by name
    <input
        className={style.input}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
    />
    </label>
);
};

export default SearchBox;