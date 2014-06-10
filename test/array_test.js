/*global describe, it, define, expect*/
/*jslint indent: 2, todo: true */

define(['blame'], function (blame) {
  'use strict';

  function unused() { return; }

  var tarr = blame.tarr,
    Arr = blame.Arr,
    Num = blame.Num,
    Bool = blame.Bool,
    Str = blame.Str,
    tfun = blame.tfun,
    wrap = blame.wrap,
    forall = blame.forall,
    tyvar = blame.tyvar,
    used = unused,
    gen_label;


  function wrapped() {
    var args = Array.prototype.slice.call(arguments || []);

    return function () {
      return wrap.apply(undefined, args);
    };
  }

  gen_label = (function () {
    var counter = 0;

    return function () {
      counter += 1;

      return 'label_' + counter;
    };
  }());

  describe('Array wrapper', function () {
    it('should exist', function () {
      used(expect(tarr).to.exist);
      used(expect(Arr).to.exist);
    });

    it('should wrap simple arrays', function () {
      var label = gen_label();
      [[], [1, 2], ['a', 1, true]].forEach(function (e) {
        expect(wrapped(Arr, e, label)).not.to.throw();
      });
    });

   it('should reject other types', function () {
      var label = gen_label();

      [1, 'a', true, function () {return;}, {}].forEach(function (e) {
        expect(wrapped(Arr, e, label)).to.throw(label);
      });
   });

   it('should wrap the array', function () {
     var label = gen_label(),
      array = [];

      expect(array).to.equal(array);
      expect(wrap(tarr(Num), array, label)).not.to.equal(array);
   });

   it('should defer the check on elements until read/write', function () {
     var label = gen_label();

     expect(wrapped(tarr(Num), ['a', 'b', 'c'], label)).not.to.throw();
   });


  });

});

// vim: set ts=2 sw=2 sts=2 et :
