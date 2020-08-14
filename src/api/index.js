import { Database } from '../util/dbWrapper'
/*
task = {
    taskId int, 
    name text, 
    days text, 
    repeatFrequency text, 
    reminders int, 
    reminderTimes text, 
    streak int, 
    completed int, 
    lastCompleted text
}
*/
export const createTable = () => {
  this.db = new Database("db.db", {
    prepareConnFn: async (connection) => {
      try {
        const sql = `create table if not exists tasks (id integer primary key not null, taskId int, name text, days text, repeatFrequency text, reminders int, reminderTimes text, streak int, completed int, lastCompleted text)`;
        await connection.execute(sql);
        console.log('created table')
      } catch (e) {
          console.log('table creation failed')
      }
    },
  });
};

export const getTask = async() => {
  const sql = `select * from tasks`;
  const result = await this.db.execute(sql);
  return result;
}

export const addTask = async(...task) => {
    const sql = `insert into tasks (taskId, name, days, repeatFrequency, reminders, reminderTimes, streak, completed, lastCompleted) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await this.db.transaction(async (connection) => {
        const result = await connection.execute(sql, [taskId, name, days, repeatFrequency, reminders, reminderTimes, streak, completed, lastCompleted]);
        return result;
    });
};

const TaskQueries = {
  createTable, 
  getTask,
  addTask
}

export default TaskQueries