function TodoItem2() {
  let ItemName = 'Resume making';
  let ItemDate = '05/10/2025';

  return (
    <div class='container'>
        <div class='row kg-row'>
          <div class='col-6'>{ItemName}</div>
          <div class='col-4'>{ItemDate}</div>
          <div class='col-2'>
            <button type="button" class='btn btn-danger kg-button'>Delete</button>
          </div>
        </div>
    </div>
  );
}
export default TodoItem2;