
# CNAPP Dashboard with Vite

This project is a dynamic CNAPP dashboard built with **React** and styled with **Bootstrap**. The dashboard includes features like adding widgets, dynamic widget visibility, search functionality, and categorization of widgets. It utilizes **Vite** for faster development and build.

## Features

- **Dynamic Categories and Widgets**: Categories such as CSPM, CWPP, and Registry Scan can contain multiple widgets, which are added or removed dynamically.
- **Add Widget**: Users can add new widgets to any category by providing the widget name and text.
- **Remove Widget**: Each widget has a cross icon to remove it from the category, or users can uncheck it from the category list.
- **Search Widget**: Users can search for widgets across all categories.

---

## JSON Structure

The dashboard is built using a **JSON** structure to dynamically manage categories and widgets. Here's an example of how the JSON structure is defined:

```json
{
  "categories": [
    {
      "id": "cspm",
      "name": "CSPM Executive Dashboard",
      "widgets": [
        { "id": "cloud-accounts", "name": "Cloud Accounts", "text": "2 Total
Connected (2)
Not Connected (2)" },
        { "id": "cloud-risk", "name": "Cloud Account Risk Assessment", "text": "9659 Total
Failed (1689)
Warning (681)
Not available (36)
Passed (7253)" }
      ]
    },
    {
      "id": "cwpp",
      "name": "CWPP Dashboard",
      "widgets": []
    },
    {
      "id": "registry",
      "name": "Registry Scan",
      "widgets": [
        { "id": "risk-assessment", "name": "Image Risk Assessment", "text": "1470 Total Vulnerabilities
Critical (9)
High (150)" },
        { "id": "security-issues", "name": "Image Security Issues", "text": "2 Total Images
Critical (2)
High (2)" }
      ]
    }
  ]
}
```

Each **category** contains an array of **widgets**, and each widget has the following properties:
- `id`: Unique identifier for the widget.
- `name`: Name of the widget.
- `text`: Content or information displayed on the widget.

---

## User Flow

### 1. **Add Widget to Category**
   - When the user clicks the `+ Add Widget` button in a category (e.g., CSPM Executive Dashboard), they can enter the **widget name** and **widget text**.
   - The new widget will be added dynamically to that category.

### 2. **Remove Widget**
   - Each widget has a **cross icon (x)** that users can click to remove the widget from the category.
   - Alternatively, users can uncheck the widget from the category list in the Add Widget modal to remove it.

### 3. **Search Widgets**
   - The search bar allows users to search for widgets across all categories. The results will be filtered dynamically based on the widget name.

---

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (v14.0 or later) – [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) – Comes with Node.js

Alternatively, if you prefer using **yarn**, you can install it globally with:

```bash
npm install -g yarn
```

---

## Installation

1. **Clone the repository:**

   First, clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/cnapp-dashboard.git
   cd cnapp-dashboard
   ```

2. **Install dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

---

## Development

To run the application in development mode using Vite:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

2. **Open your browser** and navigate to:

   ```bash
   http://localhost:3000
   ```

   This will launch the app in development mode with fast HMR (Hot Module Replacement) support.

---

## Building for Production

To build the application for production, run:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This will create a `dist` folder with the production build, optimized and ready to deploy.

---

## Project Structure

Here's a breakdown of the key files and directories in the project:

- **`src/`**: Contains the main source code of the app.
  - **`components/`**: Contains the React components used throughout the app.
  - **`data/`**: Contains static data used for initializing the dashboard categories and widgets.
  - **`styles/`**: Contains CSS files for styling the app.
  - **`App.jsx`**: The main entry point for the React application.
- **`index.html`**: The root HTML file for the application.
- **`vite.config.js`**: Vite configuration file.

---

## Deployment

If you'd like to deploy the app to a hosting service (such as Netlify, Vercel, or GitHub Pages), you can follow these steps after building the project:

1. **Build the app** (see the "Building for Production" section).
2. Deploy the contents of the `dist` folder to your chosen hosting provider.

---

## License

This project is licensed under the **MIT License**.

---

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
