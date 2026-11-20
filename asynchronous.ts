// a function to simulate a task that takes time (helper function)
function doTask(taskName: string, seconds: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${taskName} is ready!`);
    }, seconds * 1000);
  });
}

// This function does three task to make a "breakfast" using async and await
async function makeBreakfast() {
  console.time("Breakfast Time");

//created a list of promises which calls the helper function above
  const promises = [
    doTask('Brewing Coffee', 2),
    doTask('Toasting Bread', 3),
    doTask('Frying Eggs', 2)
  ]
  // used await promise all to do the tasks without waiting for each other
  await Promise.all(promises);

  console.timeEnd("Breakfast Time");
}

makeBreakfast();