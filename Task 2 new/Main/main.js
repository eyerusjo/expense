// GET REQUEST
  
  // POST REQUEST
  function addTodo() {
    console.log('add Request');
  }
  
  // PUT/PATCH REQUEST
  function editTodo() {
    console.log('edit Request');
  }
  
  // DELETE REQUEST
  function deleteTodo() {
    console.log('delete Request');
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  
  // INTERCEPTING REQUESTS & RESPONSES
 
  // Show output in browser
  function showOutput(res) {
    document.addElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Expense listeners
  document.getElementById('add').addExpenseListener('click', addTodos);
  document.getElementById('edit').addExpenseListener('click', editTodo);
  document.getElementById('delete').addExpenseListener('click', deleteTodo);
  document.getElementById('headers').addExpenseListener('click', customHeaders);
  document
    .getElementById('transform')
    .addExpenseListener('click', transformResponse);