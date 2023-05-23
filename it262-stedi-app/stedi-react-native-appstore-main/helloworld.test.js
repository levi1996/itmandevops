import hello from './helloworld.js';
import assert from 'assert';

it ("Should say hello", ()=>{

    const hello = hello();
    
    assert.equal(hello, "hello");


});