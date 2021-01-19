import {MyDatabaseFunction} from './db/my-database-function';
import {myDatabaseClassic as myDatabaseFromModuleA} from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: 'Rodrigo', age: 40});
myDatabaseClassic.add({name: 'Maria', age: 18});
myDatabaseClassic.add({name: 'Henrique', age: 54});
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);