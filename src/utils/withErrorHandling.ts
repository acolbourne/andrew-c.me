export const withErrorHandling = <T, A extends unknown[]>(fn: (...args: A) => Promise<T>) => {
  return async (...args: A): Promise<T> => {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return errorMessage as unknown as T;
    }
  };
};
