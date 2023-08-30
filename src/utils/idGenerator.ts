import { v4 as uuid4 } from 'uuid';

export const generateId = () => {
    return uuid4();
}