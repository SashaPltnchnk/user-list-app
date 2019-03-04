import React from 'react';
import SearchInput from './SearchInput';
import ButtonChart from './ButtonChart';

const Header = () => {
  return (
    <header className="bg-dark ">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="text-success">Random User</h1>
        <SearchInput />
        <ButtonChart />
      </div>
    </header>
  );
};

export default Header;
