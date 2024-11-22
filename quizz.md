1. The correct answer is B. In React (and React Native), fragments allow you to group multiple elements without adding extra nodes to the DOM or the native view hierarchy
2. The reducer codes that do not follow best practices are A and C by directly mutating the state
3. The correct reducer code is A. B is incorrect because reducers cannot be asynchronous and C has the syntax error (using await without being a async function)
4. A. takes a component and returns a new component
5. B. a technique to render a small subset of a larger dataset.
6. A. getDerivedStateFromError. getDerivedStateFromError is a static lifecycle method
7. The status codes that are not errors are:
    - A. 204
    - D. 200
8.
```typescript
async function registerUser(name: string, age: number): Promise<string | number> {
   try {
     // Simulate sending a registration request to the server
      const response = await sendRegistrationRequest(name, age);

      // Check if the response indicates success
      if (response.status === 200) {
         // Return the success message
         return response.data;
      } else {
         // Return the status code if the registration was not successful
         return response.status;
      }
   } catch (error: any) {
     // Return the status code from the error, or 500 if unavailable
      return error.statusCode || 500;
   }
}

// Simulated function to represent the server request (for demonstration purposes)
async function sendRegistrationRequest(name: string, age: number): Promise<{status: number, data: String}> {
  // Simulate a successful response with a 200 status code
   // To simulate a failure, you could reject the promise or return a different status code
   return new Promise((resolve) => {
      setTimeout(() => resolve({status: 200, data: 'User registered successfully'}), 1000);
   });
   
}
```
9. (The response are in tue quizz question) Queries are used to get data; mutations are used to create, edit or delete data
10. C. SwiftUI. SwiftUI is a UI framework specific to Apple’s platforms and the Swift programming language. 
   
