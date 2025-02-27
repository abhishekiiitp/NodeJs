async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 start2');
    await async3();
    console.log("async1 end");
  }
  
  async function async2() {
    console.log('async2');
  }

  async function async3() {
    console.log('async3 start');
    await async4();
    console.log('async3 end');
  }

  async function async4() {
    console.log('async4');
  }
  
  console.log('script start');
  
  setTimeout(function () {
    console.log('setTimeout');
  }, 0);
  
  async1();
  
  new Promise(function (resolve) {
    console.log('promise1');
    resolve();
  }).then(function () {
    console.log('promise2');
  });
  
  console.log('script end');

  /**
   * script start
async1 start
async2
promise1
script end
async1 start2
async3 start
async4
promise2
async3 end
async1 end
setTimeout
   */
  