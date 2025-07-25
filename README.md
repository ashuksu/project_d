UI5 | SAP Fiori project | from scratch

# [PROJECT D](https://ashuksu.github.io/project_d/)

npm install --global @ui5/cli

package.json
webapp/
webapp/index.html
webapp/manifest.json
webapp/index.js

webapp/view/App.view.xml
webapp/controller/App.controller.js

npm i -D @ui5/cli
ui5 init

ui5 use OpenUI5
ui5 add sap.ui.core sap.m themelib_sap_horizon

npm start


---

## Create a New UI5 Project with `yo easy-ui5`

This project was generated using the [easy-ui5 generator](https://github.com/ui5-community/generator-ui5-project).
It's the recommended way to scaffold UI5/Fiori apps with best practices and ready-to-use project structure.

To create a new UI5 application:

```bash
# Create and enter a new folder
mkdir my-ui5-app
cd my-ui5-app
```

```bash
# Run the UI5 project generator
yo easy-ui5
```

You’ll be guided through a few prompts (project name, namespace, framework version, view type, etc.).
After a generation, run the following:

```bash
npm install     # Install dependencies
npm start       # Start local dev server (ui5 serve)
npm run build   # Build the app into /dist folder
```

---
