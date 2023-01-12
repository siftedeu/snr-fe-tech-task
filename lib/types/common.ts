/**
 * This allows us to modify an existing type, either changing
 * an existing key or adding a new one
 */
export type Modify<T, R> = Omit<T, keyof R> & R;
