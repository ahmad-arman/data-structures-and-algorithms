'use strict';
const Hash = require('../../hash-table');
const leftJoin = require('../hashmap-left-join');


describe('Left JOINs Test',() => {
  it('Shall successfully join Hashleft table with right Hashtable',() => {


    let leftHash = new Hash(200);
    leftHash.add('ahmad','manager company');
    leftHash.add('hazelnuts king','amjad');
    leftHash.add('ibrahim','employee');
    leftHash.add('omar',' king');


    let rightHash = new Hash(200);
    rightHash.add('ahmad',' best man ');
    rightHash.add('hazelnuts king','emran');
    rightHash.add('ibrahim','student');
    rightHash.add('apple','fruit');


    expect(leftJoin(leftHash,rightHash)).toEqual([["ibrahim", "employee", "student"], ["ahmad", "manager company", " best man "], ["hazelnuts king", "amjad", "emran"], ["omar", " king", "NULL"]]);
    expect(leftJoin(rightHash,leftHash)).toEqual( [["ibrahim", "student", "employee"], ["apple", "fruit", "NULL"], ["ahmad", " best man ", "manager company"], ["hazelnuts king", "emran", "amjad"]]);
  });



  it('Should successfully throws an exception if any of the inputs is a non hash Table',() => {
    expect(() => leftJoin(1,'string').toThrow('Inputs must be hash table'));
  });


  it('Should successfully throws an exception if any of the inputs is a null',() => {
    expect(() => leftJoin(1,'string').toThrow('Inputs must not be a null'));
  });
});
