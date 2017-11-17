import { schema } from 'normalizr';

// Define a task schema
const taskSchema = new schema.Entity('tasks', {}, { idAttribute: 'id'});
const taskListSchema = new schema.Array(taskSchema);


export default taskListSchema;
export { taskSchema }