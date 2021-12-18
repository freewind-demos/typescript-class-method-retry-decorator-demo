export async function retry<T>(
  name: string,
  maxRetryTimes: number,
  fn: () => Promise<T>
): Promise<T> {
  console.debug('> retry', {name, maxRetryTimes});
  try {
    return await fn();
  } catch (error) {
    console.debug('will retry on error:', error.message);
    if (maxRetryTimes === 0) {
      throw error;
    }
    return await retry(name, maxRetryTimes - 1, fn);
  }
}
