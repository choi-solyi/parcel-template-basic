console.log('hello parcel');

async function test(){  //async 비동기 함수
    const promise = Promise.resolve(123)
    console.log(await promise)
}
test()