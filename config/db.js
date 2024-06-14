// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  award: 'contractNo, projectName, budget, contractAmount, bidderInfo' // Primary key and indexed props
});