// Sample data representing posts and users
const posts = [];
const users = [
  { id: 1, name: "Alice", lastActivityTime: null },
  { id: 2, name: "Bob", lastActivityTime: null },
];

// Create a post and update the user's lastActivityTime
function createExpense(userId, postContent) {
  const post = { userId, content: postContent };
  posts.push(post);
  console.log(`Created Expense: ${JSON.stringify(post)}`);
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

// Update the user's lastActivityTime
function updateLastUserActivityTime(userId) {
  const user = users.find((u) => u.id === userId);
  console.log(`Updating lastActivityTime for user: ${user.name}`);
  user.lastActivityTime = new Date();
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

// Delete the last post created by the given user
function deleteLastExpense(userId) {
  const index = posts.findIndex((p) => p.userId === userId);
  if (index !== -1) {
    const post = posts.splice(index, 1)[0];
    console.log(`Deleted post: ${JSON.stringify(post)}`);
    return Promise.resolve();
  } else {
    return Promise.reject(new Error(`No posts found for user ${userId}`));
  }
}

// Usage example
const userId = 1;