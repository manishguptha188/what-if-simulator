# What If? — Subscription & Impulse-Buy Simulator

A React app that helps you understand what recurring subscriptions cost, simulate hypothetical cancellations, and estimate how long those savings could take to fund a purchase.

> **Frontend-only project:** All subscription data is held in React state in the browser. Changes are not saved after a page refresh.

## ✨ Features

- **Manage subscriptions:** Add and delete subscriptions with a name, price, billing cycle, category, and usage level.
- **Compare billing cycles:** See the monthly equivalent of yearly subscriptions.
- **Simulate cancellations:** Mark subscriptions as candidates for cancellation without actually deleting them or cancelling a real service.
- **Project savings:** View estimated savings over 1, 3, and 5 years based on the subscriptions selected for cancellation.
- **Set a purchase goal:** Enter a goal name and price to estimate how many months of simulated savings it could take to afford a purchase and whether it is achievable within one year.
- **Filter subscriptions:** Filter by category and show only rarely used subscriptions.
- **Reset the simulation:** Clear all cancellation selections with one action.
- **Responsive dark UI:** A dark personal-finance theme with dashboard statistics, form controls, subscription cards, and an empty state when no items match the filters.

## 🛠️ Built With

- React
- JavaScript (ES6+)
- Vite
- HTML
- CSS

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- Git (optional, for cloning the repository)

### Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

Replace the placeholders with your actual GitHub repository URL and local folder name.

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open the application**

Open the local URL displayed in your terminal by Vite.

## 📖 How to Use

1. Add a subscription and enter its name, cost, billing cycle, category, and usage frequency.
2. Review your current monthly and estimated annual spending in the dashboard.
3. Select **Simulate Cancel** for subscriptions you are considering cancelling.
4. Compare the projected savings over 1, 3, and 5 years.
5. Enter a purchase goal and price to estimate how long it could take to afford it.
6. Use the category dropdown and **Show Rarely Used Only** checkbox to filter subscriptions.
7. Click **Reset What-If Simulation** to clear all simulated cancellation selections.

The simulation does not cancel real subscriptions or delete your subscription records.

## 🧮 How the Calculations Work

- **Monthly equivalent:** Yearly subscription costs are divided by 12 and rounded to the nearest whole unit.
- **Monthly spending:** The monthly equivalent costs of all subscriptions are added together.
- **Potential monthly savings:** Only subscriptions marked for simulated cancellation contribute to the savings total.
- **Future savings:** The estimated monthly savings are multiplied by 12, 36, and 60 for the 1-, 3-, and 5-year projections.
- **Purchase goal:** The estimated number of months is calculated by dividing the goal price by the simulated monthly savings and rounding up to a whole month.

These are illustrative projections, not financial advice. They assume subscription costs remain unchanged and the simulated savings are set aside each month.

## 📁 Project Structure

```text
src/
├── components/
│   ├── FilterControls.jsx
│   ├── SavingsDashboard.jsx
│   ├── SubscriptionForm.jsx
│   ├── SubscriptionItem.jsx
│   └── SubscriptionList.jsx
├── data/
│   └── initialSubscriptions.js
├── App.jsx
├── App.css
└── main.jsx
```

### Component Overview

- **`App.jsx`** — Manages subscription state, event handlers, and filtering logic.
- **`SubscriptionForm.jsx`** — Collects and validates new subscription details.
- **`SubscriptionList.jsx`** — Renders filtered subscriptions and the empty state.
- **`SubscriptionItem.jsx`** — Displays an individual subscription and its actions.
- **`SavingsDashboard.jsx`** — Calculates spending, simulated savings, and purchase-goal estimates.
- **`FilterControls.jsx`** — Provides category filtering, usage filtering, and simulation reset controls.

## 🧠 What I Learned

This project helped me practice and apply:

- Functional components, JSX, props, and destructuring
- React state with `useState` and component re-rendering
- Controlled form inputs and event handling
- Rendering collections with `map()` and unique keys
- Filtering and accumulating array data with `filter()` and `reduce()`
- Updating arrays and objects immutably
- Derived calculations and conditional rendering
- Component composition and communication through props
- Debugging with `console.log()`
- Styling and responsive layouts with CSS

## 🔮 Future Improvements

- Persist subscription data across page refreshes using local storage
- Add search by subscription name
- Improve currency formatting and support decimal costs
- Add automated tests for calculations and form validation

## 👨‍💻 About

**What If?** is a frontend project built as part of my journey learning React through the [Full Stack Open](https://fullstackopen.com/en/) course.

The goal was to strengthen my understanding of React fundamentals by building an interactive application from scratch.

---

Built with React and curiosity. 🚀
