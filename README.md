# Node.js TypeScript Template

This is a template repository for NPM package projects written in TypeScript. It provides a structured starting point, including configuration for linting, testing, automatic releases, dependency updates, and more.

## Features

-   **Project Structure**: Organized file structure from `src` directory for source files to `index.ts`.
-   **Testing Support**: Integrated testing setup with a dedicated `test` directory.
-   **Linting with ESLint**: Includes ESLint configuration for code linting.
-   **Semantic Releases with npm Publish**: Automated versioning, release notes generation, and package publishing to npm using semantic versioning.
-   **Dependabot**: Automatic dependency updates through GitHub Dependabot.
-   **Node Workflow**: GitHub Actions workflow for Node.js testing on push and pull requests.

> [!NOTE]  
> By default, package publishing to npm using semantic versioning is disabled. To enable it, you need to set or remove the `private` property in the `package.json` file to false.

## Usage

To use this template for your project:

1. Click on the "Use this template" button at the top of the repository to create a new repository based on this template.
2. Clone your newly created repository to your local machine.
3. Customize the project according to your requirements.
4. Start developing your Node.js application!

## Getting Started

Follow these steps to get your development environment set up:

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run linting:

    ```bash
    npm run lint
    ```

3. Run tests:

    ```bash
    npm test
    ```

4. Build the package:

    ```bash
    npm run build
    ```

5. Log in to npm if not already:

    ```bash
    npm login
    ```

6. Publish the package to npm:

    ```bash
    npm publish
    ```

## Contributing

Contributions are welcome! If you find any issues or would like to propose enhancements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
