export const set = prop => (state, value) => state[prop] = value;
export const toggle = prop => (state) => state[prop] = !state[prop];
