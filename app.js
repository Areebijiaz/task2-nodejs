const API_URL = "https://jsonplaceholder.typicode.com/users";

const fetchAndProcessUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();

    const filteredUsers = users.filter(({ company: { catchPhrase, name, bs } }) =>
      /group|service/i.test(catchPhrase) ||
      /group|service/i.test(name) ||
      /group|service/i.test(bs)
    );

    const formattedUsers = filteredUsers.map(
      ({ name, email, address: { city } }) =>
        `User: ${name} | Email: ${email} | City: ${city}`
    );

    console.log("=== Filtered & Formatted Users ===\n");
    formattedUsers.forEach((entry) => console.log(entry));
    console.log(`\nTotal matched users: ${formattedUsers.length}`);

  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

fetchAndProcessUsers();
