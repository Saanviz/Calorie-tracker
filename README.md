# Calorie-Tracker; Saanvi Juneja
#### Video Demo:  <(https://youtu.be/ufYXJN3xcsw)>
#### Description:
#### index.html: 
#### My `index.html` file serves as the foundation for the Calorie Tracker web application, organizing the layout and functionality of the page. It begins with standard HTML structure, including meta tags for character encoding and viewport settings to ensure proper rendering on all devices. The <title> tag gives the page its name, "Calorie Tracker," which appears in the browser tab, and the `link` tag imports external styles from the `style.css` file to handle the visual design. Inside the body of the page, there is a central container that holds all the app's content. The page allows users to input meal details, including the type of meal (Breakfast, Lunch, Dinner, or Snack), the meal name, and the calories associated with it. Users can select these options via a dropdown for meal type and text input for the meal name and calorie count. There's also a button that, when clicked, adds the meal to the tracker. Additionally, a section for tracking water intake lets users input the amount of water consumed in milliliters. Another button adds this data to the log. The app features a progress bar to visually represent the user's progress towards their daily calorie goal. This progress bar updates dynamically as meals are added, and it shows messages based on how close the user is to reaching their calorie target. There is also a display showing the remaining calories to be consumed, providing instant feedback to the user. In addition to tracking meals and water intake, the page provides healthy meal suggestions across different categories like "Low Carb - High Protein," "Vegetarian," and "Vegan." Each suggestion lists the meal, its calorie content, and a link to the recipe for the user to explore further. To ensure that the data persists across sessions, the JavaScript code embedded in the page uses `localStorage` to store the user's meals and water intake. This allows the data to remain available even after the page is reloaded. The JavaScript also handles the functionality of adding and removing meals and water entries, as well as updating the progress bar and other displays dynamically based on user input. Overall, my `index.html` serves as a user-friendly interface for tracking both calories and water intake while offering helpful meal suggestions and ensuring that user data is preserved across sessions.
#### script.js:
#### The script.js file is responsible for managing the dynamic functionality of your Calorie Tracker app. It starts by setting up event listeners that ensure the page's interactive elements work as intended. The file begins by waiting for the DOM to be fully loaded using document.addEventListener('DOMContentLoaded') before executing the code, ensuring that all elements are available before they are manipulated. Within the script, key variables are defined to reference the elements from the HTML, such as the meal input, calorie input, water intake input, progress bar, and target calorie display. These variables are used throughout the code to manipulate the page based on user interaction. The script’s core functionality revolves around managing meals and water intake: Meals: When the user adds a meal by clicking the "Add Meal" button, the meal type, name, and calorie count are stored in the savedMeals array, which is also saved to localStorage for persistence. The meals are added to a log displayed on the page, where they can be edited or removed. Each meal is appended to a list (<ul id="meal-log">) with options to edit or remove. Water Intake: Similarly, when the user enters water intake (in milliliters), it is added to a list (<p id="water-intake">), and the total water intake is updated accordingly. Water logs are saved in the savedWater array and also persist in localStorage. Progress Bar: The script calculates the progress toward the target calorie goal based on the meals added. It dynamically updates a progress bar that visually represents how close the user is to reaching their daily goal. The bar’s width adjusts as calories are added, and different messages appear based on the user’s progress. Datalist for Past Meals: The script dynamically fills a datalist (<datalist id="past-meals">) with past meal entries, so users can easily reuse previously entered meals. Event Handling: The script also manages editing and removing meals and water intake. If the user clicks "Edit" on a meal or water log, the input fields are populated with the existing data, and the user can modify it. When the "Remove" button is clicked, the corresponding entry is deleted from both the display and localStorage. The script.js file ensures that the app is fully interactive, from adding meals to tracking water intake, and it keeps everything synchronized with the browser’s local storage so that the user’s data is saved across sessions.
#### style.css 
#### The style.css file is responsible for the visual design and layout of the Calorie Tracker app, controlling the look and feel of the page. It defines a clean and user-friendly design to ensure the app is visually appealing and easy to navigate. Global Styles: The file begins by setting the default font for the entire page (font-family: Arial, sans-serif) and applies some general spacing and background color to the body (background-color: #f4f4f9). This ensures the page has a light and modern look. Container and Layout: The .container class applies styles to center the main content of the page, such as setting a maximum width, adding padding, and applying a subtle box shadow for a card-like effect. This helps create a clean and well-structured layout for the app. It also rounds the corners of the container using border-radius: 8px to give it a smooth, modern appearance. Text and Headings: The h1 header, which displays the title "Calorie Tracker," is centered and given a green color (color: #4CAF50) to match the app’s branding. Other headings like h2 and h3 are styled to provide a consistent look for the various sections, such as the meal suggestions. Input Fields and Buttons: Input fields (like meal name, calorie count, and water intake) are styled to be visually consistent with uniform padding, margins, and border radius. This makes the form elements easy to interact with. Buttons are also styled with a green background color (background-color: #4CAF50) and change color slightly when hovered (button:hover), creating a visually responsive experience for the user. Progress Bar: The .progress-bar-container and .progress-bar classes define the appearance of the progress bar that shows the user’s calorie progress. The container has a light background (background: #eee) and rounded corners, while the progress bar itself is green (background: #4CAF50) and its width dynamically adjusts based on the user's calorie progress. Meal Log and Water Log: Both the meal log and water log (<ul id="meal-log"> and <ul id="water-intake">) are styled with no bullet points (list-style: none) and each log entry is given padding, a light background color, and a border. This creates a neat list of entries with clear separation between them. The list items also feature buttons for editing and removing entries, with padding and margin applied to ensure the buttons are easy to click. Diet Suggestions: The .diet-options class styles the meal suggestions section, with a clear distinction between categories like “Low Carb - High Protein,” “Vegetarian,” and “Vegan.” Each list item is styled similarly to the meal log, with meal names linked to external recipe pages. Overall, the style.css file ensures that the Calorie Tracker app has a clean, modern, and consistent design that enhances the user experience. It prioritizes readability, accessibility, and ease of interaction with the various elements on the page, from the meal and water input sections to the dynamic progress bar and meal suggestions.
