import { actionPrefix } from 'redux/utils';

const ACTION_PREFIX = 'MODAL';
const prefix = actionPrefix(ACTION_PREFIX);

export const OPEN = prefix('OPEN')
export const CLOSE = prefix('CLOSE')