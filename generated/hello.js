if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'hello'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'hello'.");
}
var hello = function (_, Kotlin) {
  'use strict';
  function main(args) {
    console.log(hello('Kotlin JS'));
  }
  function hello(name) {
    return 'Hello, ' + name + '!';
  }
  var package$example = _.example || (_.example = {});
  package$example.main_kand9s$ = main;
  package$example.hello_61zpoe$ = hello;
  main([]);
  Kotlin.defineModule('hello', _);
  return _;
}(typeof hello === 'undefined' ? {} : hello, kotlin);
