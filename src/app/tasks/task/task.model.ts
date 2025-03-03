export interface Task {
  id:string,
  userId:string,
  title:string,
  summary:string,
  dueDate:string,
}

export interface NewTaskData{
  enteredTitle:string,
  enteredDate:string,
  enteredSummary:string,
}
