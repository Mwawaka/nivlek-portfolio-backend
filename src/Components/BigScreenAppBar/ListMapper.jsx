import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './bigScreen.css';

export const ListMapper = ({ title, id, active, setSelected }) => {
  return (
    <>
      <li
        class={active ? 'nav-item active' : 'nav-item'}
        onClick={() => {
          setSelected(id);
          if (id === 'resume') {
            toast.success('Resume Coming Soon.Kirwa is working on it 🤣', {
              duration: 4000,
            });
          }
        }}
      >
        <a class="nav-link text-primary" href={`#${id}`}>
          {title}
        </a>
      </li>
    </>
  );
};
