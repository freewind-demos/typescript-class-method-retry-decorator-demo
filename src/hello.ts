import {autoRetryOnError} from './retryDecorator';

class User {
  private queryTimes = 0;

  @autoRetryOnError(3)
  hello() {
    console.log("### queryTimes", this.queryTimes);
    if (this.queryTimes === 0) {
      throw new Error("Test-error")
    } else {
      this.queryTimes += 1;
    }
    console.log("Hello!");
  }
}

const user = new User()
user.hello();
