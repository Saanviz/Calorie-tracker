document.addEventListener('DOMContentLoaded', () => {
    let totalCalories = 0;
    let totalWater = 0;
    let targetCalories = 2000;

    const mealInput = document.getElementById('meal');
    const caloriesInput = document.getElementById('calories');
    const waterInput = document.getElementById('water');
    const addMealButton = document.getElementById('add-meal');
    const calorieProgress = document.getElementById('progress-bar');
    const progressMessage = document.getElementById('progress-message');
    const mealLog = document.getElementById('meal-log');
    const setTargetButton = document.getElementById('setTargetButton');
    const targetCaloriesDisplay = document.getElementById('target-calories');
    const waterIntakeDisplay = document.getElementById('water-intake');
    const pastMeals = document.getElementById('past-meals');
    const mealSuggestionsContainer = document.getElementById('meal-suggestions');

    let savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
    let savedWater = JSON.parse(localStorage.getItem('water')) || [];

    // Predefined Healthy Meal Suggestions
    const healthyMeals = [
        { name: "Grilled Chicken Salad", calories: 350 },
        { name: "Avocado Toast with Eggs", calories: 400 },
        { name: "Vegetable Stir-Fry", calories: 300 },
        { name: "Quinoa and Black Bean Bowl", calories: 450 },
        { name: "Smoothie with Spinach, Banana, and Almond Milk", calories: 250 },
        { name: "Salmon with Steamed Broccoli", calories: 500 },
        { name: "Greek Yogurt with Berries", calories: 150 },
    ];

    // Load saved data
    savedMeals.forEach(({ type, meal, calories }, index) => {
        addMealToLog(type, meal, calories, index);
    });

    savedWater.forEach(({ date, water }) => {
        addWaterToLog(date, water);
    });

    // Display healthy meal suggestions
    function displayHealthyMeals() {
        mealSuggestionsContainer.innerHTML = ''; // Clear previous suggestions
        healthyMeals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('suggestion');
            div.innerHTML = `<strong>${meal.name}</strong> - ${meal.calories} calories`;
            mealSuggestionsContainer.appendChild(div);
        });
    }

    // Update Progress Bar and Display
    function updateProgress() {
        const progress = Math.min((totalCalories / targetCalories) * 100, 100);
        calorieProgress.style.width = `${progress}%`;
        waterIntakeDisplay.textContent = `Total Water Intake: ${totalWater} ml`;
        progressMessage.textContent = getProgressMessage(progress);
    }

    function getProgressMessage(progress) {
        if (progress >= 100) return "Congratulations! You've reached your target!";
        if (progress >= 90) return "Warning: You are close to exceeding your calorie limit.";
        if (progress >= 75) return "Almost there! Keep going!";
        if (progress >= 50) return "Halfway there! Keep it up!";
        if (progress > 0) return "Great start!";
        return "Let's begin tracking!";
    }

    // Add meal to log and datalist
    function addMealToLog(type, meal, calories, index) {
        const li = document.createElement('li');
        li.innerHTML = `${type}: ${meal} - ${calories} calories <button class='edit'>Edit</button><button class='remove'>Remove</button>`;
        li.querySelector('.edit').addEventListener('click', () => {
            mealInput.value = meal;
            caloriesInput.value = calories;
            mealTypeInput.value = type;
            mealLog.removeChild(li);
            totalCalories -= calories;
            updateProgress();
        });
        li.querySelector('.remove').addEventListener('click', () => {
            mealLog.removeChild(li);
            totalCalories -= calories;
            updateProgress();
        });
        mealLog.appendChild(li);
        totalCalories += calories;
        updateProgress();
    }

    // Add water to log
    function addWaterToLog(date, water) {
        const li = document.createElement('li');
        li.innerHTML = `${date}: ${water} ml <button class='edit-water'>Edit</button><button class='remove-water'>Remove</button>`;
        li.querySelector('.edit-water').addEventListener('click', () => {
            waterInput.value = water;
            totalWater -= water;
            updateProgress();
        });
        li.querySelector('.remove-water').addEventListener('click', () => {
            totalWater -= water;
            updateProgress();
        });
        mealLog.appendChild(li);
        totalWater += water;
        updateProgress();
    }

    // Add meal
    addMealButton.addEventListener('click', () => {
        const type = mealTypeInput.value;
        const meal = mealInput.value;
        const calories = parseInt(caloriesInput.value);

        if (meal && calories > 0) {
            savedMeals.push({ type, meal, calories });
            localStorage.setItem('meals', JSON.stringify(savedMeals));
            addMealToLog(type, meal, calories);
            mealInput.value = '';
            caloriesInput.value = '';
        } else {
            alert('Please enter a valid meal name and positive calories.');
        }
    });

    // Add water
    document.getElementById('add-water').addEventListener('click', () => {
        const water = parseInt(waterInput.value);
        const date = new Date().toLocaleDateString();

        if (water > 0) {
            addWaterToLog(date, water);
            savedWater.push({ date, water });
            localStorage.setItem('water', JSON.stringify(savedWater));
            waterInput.value = '';
        } else {
            alert('Please enter a valid water intake.');
        }
    });

    // Set custom target calories
    setTargetButton.addEventListener('click', () => {
        const customTarget = prompt("Enter your target calories:");
        if (customTarget && !isNaN(customTarget)) {
            targetCalories = parseInt(customTarget);
            targetCaloriesDisplay.textContent = targetCalories;
            calorieProgress.max = targetCalories;
            updateProgress();
        } else {
            alert("Please enter a valid number.");
        }
    });

    // Initialize the page with saved data and healthy meal suggestions
    updateProgress();
    displayHealthyMeals();
});
