import React from 'react';
import { Context } from '../contexts/Provider';

function useComments() {
   return React.useContext(Context);
}

export default useComments;