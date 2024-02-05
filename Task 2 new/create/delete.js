
  
  // Async/Await version of add and delete
  const create = async (post) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", 
      {
        method: "add",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("Expense created:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  const deleteexpense = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
      {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Post deleted:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 