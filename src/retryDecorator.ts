import {retry} from './retry';

// the decorator
export function autoRetryOnError(maxRetryTimes = 3) {
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      return await retry(propertyKey.toString(), maxRetryTimes, () =>
        originalMethod.apply(this, args)
      );
    };
  };
}

