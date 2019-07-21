import { createRef } from 'react';
import { group } from './groupList';

export const refs = group.reduce((acc, group) => {
  acc[group] = createRef();
  return acc;
}, []);