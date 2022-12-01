import React from 'react';
import { Context } from '../contexts/Provider';

function useBlogs() {
   return React.useContext(Context);
}

export default useBlogs;