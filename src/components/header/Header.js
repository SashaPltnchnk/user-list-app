import React from 'react';
import SearchInput from './SearchInput';
import Chart from './Chart';

const Header = () => {
  return (
    <header>
      <h1>Random User</h1>
      <SearchInput />
      <Chart />
    </header>
  );
};

export default Header;
