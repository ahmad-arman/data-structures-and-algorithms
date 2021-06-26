
const Hash =require('../hash-table');


describe('HashTable',() => {
  it('Adding a key/value to your hashTable results in the value being in the data structure',() => {

    let myHashTable = new Hash(1021);

    myHashTable.add('shdan','shlool');

    expect(myHashTable.contains('shdan')).toEqual(true);
  });


  it('Retrieving based on a key returns the value stored',() => {

    let myHashTable = new Hash(1021);

    myHashTable.add('ahmad','developer');

    expect(myHashTable.get('ahmad')).toEqual([{'ahmad': 'developer'}]);

  });


  it('Successfully returns null for a key that does not exist in the hashtable',() => {

    let myHashTable = new Hash (1021);

    myHashTable.add('ahmad','developer');

    expect(myHashTable.get('batata')).toEqual(null);

  });


  it('Successfully handle a collision within the hashtable',() => {

    let myHashTable = new Hash (1021);

    myHashTable.add('ahmad','Boss');

    myHashTable.add('Jason','Student');

    expect(myHashTable.get('ahmad')).toEqual([{'ahmad': 'Boss'}, {'Jason': 'Student'}]);
  });


  it('Successfully retrieve a value from a bucket within the hashTable that has a collision',() => {

    let myHashTable = new Hash (1021);

    myHashTable.add('ahmad','Boss');

    myHashTable.add('Jason','Student');

    expect(myHashTable.getOne('ahmad')).toEqual({'ahmad': 'Boss'});
  });


  it('Successfully hash a key to an in-range value',() => {

    let myHashTable = new Hash (1021);

    expect(myHashTable.hash('ahmad')).toEqual(456);

  });


});
