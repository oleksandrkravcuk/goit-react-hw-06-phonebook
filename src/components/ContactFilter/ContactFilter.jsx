
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/phoneFilterSlice';
import css from '../App.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.container}>
      <input className={css.input}
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={changeFilter}
        filter={filter}
      />
    </label>
  );
};