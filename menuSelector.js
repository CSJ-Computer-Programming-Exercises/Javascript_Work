// Define a constant `menuChoice` with a numerical value representing the user's menu
// choice. For example, you can set `const menuChoice = 2;` to represent the user
// selecting option 2.
// 2. Create a menu with at least three options, each represented by a number and a
// corresponding action. For example:
// ● Option 1: Display "View Profile"
// ● Option 2: Display "Edit Settings"
// ● Option 3: Display "Log Out"
// 3. Use a `switch` statement to determine the action based on the `menuChoice`.
// 4. Display the action corresponding to the user's choice.
const menuChoice = 2;
switch (menuChoice) {
    case 1:
    console.log("View Profile");
    break;
    case 2:
    console.log("Edit Settings");
    break;
    case 3:
    console.log("Log Out");
    break;
    default:
    console.log("Invalid Choice");
    }