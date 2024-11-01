const getUserById = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
        } else {
          reject(new Error('User not found'));
        }
      }, 1000); // Simulate delay 1 second when api response and request
    });
  }
  
  export default getUserById;
  