// Task 2 — Fetch, Filter & Transform user data from JSONPlaceholder
// Uses: ES6 fetch, arrow functions, object destructuring, template literals, array methods

const API_URL = "https://jsonplaceholder.typicode.com/users";

const fetchAndProcessUsers = async () => {
  try {
    // 1. Fetch user data from JSONPlaceholder
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    // 2. Filter users whose company catchPhrase contains "group" or "service" (case-insensitive)
    const filteredUsers = users.filter(({ company: { catchPhrase, name, bs } }) =>
      /group|service/i.test(catchPhrase) ||
      /group|service/i.test(name) ||
      /group|service/i.test(bs)
    );

    // 3. Transform filtered users into formatted strings using object destructuring
    const formattedUsers = filteredUsers.map(
      ({ name, email, address: { city } }) =>
        `User: ${name} | Email: ${email} | City: ${city}`
    );

    // 4. Output results
    console.log("=== Filtered & Formatted Users ===\n");
    formattedUsers.forEach((entry) => console.log(entry));
    console.log(`\nTotal matched users: ${formattedUsers.length}`);

    console.log("\n=== Match Details ===\n");
    filteredUsers.forEach(({ name, company }) => {
      const matchedField = Object.entries(company)
        .filter(([, val]) => /group|service/i.test(val))
        .map(([key, val]) => `${key}: "${val}"`)
        .join(", ");
      console.log(`${name} → ${matchedField}`);
    });

  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

fetchAndProcessUsers();
