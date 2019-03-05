import Realm from 'realm';

export const TODOLIST_SCHEMA = 'TodoList'
export const TODO_SCHEMA = 'Todo'

export const TodoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: { type: 'string', indexed: true },
    done: { type: 'bool', default: true }
  }
}

export const TodoListSchema = {
  name: TODOLIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
    todos: { type: 'list', objectType: TODO_SCHEMA }
  }
}

const databaseOptions = {
  path: 'todoListApp.realm',
  schema: [TodoListSchema, TodoSchema],
  schemaVersion: 0
}

export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      realm.create(TODOLIST_SCHEMA, newTodoList);
      resolve(newTodoList);
    })
  }).catch(error => reject(error));
})

export const updateTodoList = todoList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
      updatingTodoList.name = todoList.name;
      resolve()
    })
  }).catch(error => reject(error));
})

export const deleteTodoList = todoListId => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA,todoListId);
      realm.delete(deletingTodoList)
      resolve()
    })
  }).catch(error => reject(error))
})

export const deleteAllTodoLists = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let allTodoLists = realm.objects(TODOLIST_SCHEMA);
      realm.delete(allTodoLists);
      resolve();
    })
  }).catch(error => reject(error))
})

export const queryAllTodoLists = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    let allTodoLists = realm.objects(TODOLIST_SCHEMA);
    resolve(allTodoLists);
  }).catch(error => {
    reject(error);
  })
})

export default new Realm(databaseOptions);