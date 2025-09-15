
# Mapbox Maps with Navigation

This is a React + Vite frontend application that displays interactive maps using Mapbox GL JS. The app allows users to view maps with different styles and navigation features, and shows real-time coordinates and zoom level as the map is moved or zoomed.

## Features
- Interactive Mapbox map
- Style switching (streets, navigation, etc.)
- Displays current coordinates and zoom in the console
- Built with React, Vite, and TypeScript

## Tech Stack
- React
- Vite
- TypeScript
- Mapbox GL JS

## How It Was Made
This app was created using React and Vite for fast frontend development. Mapbox GL JS is used for rendering the map and handling navigation features. Context API is used for managing map style state across components.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
