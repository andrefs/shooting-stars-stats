import {
  ADD_FLASH_ITEM, REMOVE_FLASH_ITEM
} from '../constants';

import generateActionCreator from 'lib/generateActionCreator';

export const addFlashItem    = generateActionCreator(ADD_FLASH_ITEM, 'item');
export const removeFlashItem = generateActionCreator(REMOVE_FLASH_ITEM, 'id');


export const showFlash = (item, duration) => {
  return async (dispatch) => {
    const id = Date.now();

    dispatch(addFlashItem({...item, id}));
    setTimeout(() => dispatch(removeFlashItem(id), duration) || 3000);
  };
};
