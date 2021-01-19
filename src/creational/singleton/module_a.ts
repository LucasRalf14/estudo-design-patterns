import {MyDatabaseFunction} from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: 'Luiz', age: 30});
myDatabaseClassic.add({name: 'Ana', age: 42});
myDatabaseClassic.add({name: 'Fernanda', age: 20});
//myDatabaseClassic.show();

export { myDatabaseClassic };
