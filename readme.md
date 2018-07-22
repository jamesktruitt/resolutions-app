<!-- markdownlint-disable MD037 -->

# Project 💻

For this project, I built a full-stack app using the following technologies:

1. **GraphQL w/ Apollo**
    * Alternative to REST and ad-hoc web service architectures.
    * Strongly typed runtime which allows clients to dictate what data is needed, preventing excessively large amounts of data being returned.
    * Allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server.
    * **Apollo** Is a flexible, production ready GraphQL client for React, JavaScript, and all native platforms used to query data.

1. **Meteor**
    * A full-stack JavaScript platform that provides full-stack reactivity for developing modern web and mobile applications.
    * Key set of technologies for building **connected-client** reactive apps w/ a curated set of packages from the Node.js and general JS community.
    * Rapid prototyping and produces cross-platform (Android, iOS) code.
    * Integrates with MondoDB and auto propagates data changes to clients without requiring written synchronization code.

1. **React**
    * JavaScript framework for building user interfaces.
    * Can be used in development of single-page websites or mobile applications.

## Steps

### Creating Meteor App Server & Project Structure

1. Install Meteor `curl <https://install.meteor.com/> | sh`

1. Create app *(node)* `meteor create myapp` or `meteor create myapp --bare` (*bare version)*

1. `cd myapp` and run `meteor` (starts the node server)

1. `touch .html` **root level** and write html app component render code *via app.js*

    ![React Meteor App](/polacode/1-app-id-startup.png 'React/Meteor import code')

1. `mkdir imports` (root level) and create the following folder structure:

    ```structure
    // The imports directory houses "your application"

    -| Apollo // created app/root folder
      -| .meteor // auto-generated meteor packages, step 3
      -| imports
        -| api
        -| ui (this is where your components will live)
        -| startup
          -| client
          -| server
      -| client
      -| server
    ```

### Creating A Basic React App

1. `npm install --save react react-dom`
    * apollo > client > `touch init.js` *(root client folder)*
    * imports > startup > client `touch index.js`
        * Import dependencies
        * create helloWorld component
        * Render component to app id upon Meteor startup

    ![React Meteor App](/polacode/2-react-app-setup.png 'React/Meteor import code')

    * imports > ui > `touch App.js` *(this creates your App component)*

    ![React Meteor App](/polacode/3-create-app-component.png 'React/Meteor import code')
    * Now that you created your first component, you can simply import the component in the startup > client > index.js

    ![React Meteor App](/polacode/4-import-ui-app-component.png 'React/Meteor import code')

### Adding Apollo-GraphQL Server To Meteor App

1. Install the following dependencies `apollo-client` `body-parser` `express` `graphql` `graphql-tools` `graphql-server-express`

1. .meteor > packages add "apollo" to packages plain text file

1. imports > startup > server > `touch index.js`

1. apollo > server > `touch init.js` and `console.log('hi')` in startup > server > index.js

1. Replace console log with the following to create an apollo server inside your meteor app:

    ![React Meteor App](/polacode/5-create-apollo-server.png 'Import Apollo server')

### Creating First GraphQL Schema & GraphQL Query

1. Head to your browser and in the address bar type `localhost:3000/graphiql` *(here you can see and test your data, similar to Postman)*

1. In apollo > server > index.js write your type of query, the query method, and the actual schema code

1. Pass the schema variable as an argument to your Apollo server function

    ![React Meteor App](/polacode/6-graphql-schema-query.png 'Schema and Query')

### Connecting Apollo to React & Apollo Devtools

1. Install `graphql-tag` `react-apollo` `apollo-client-preset` in apollo > client > index.js

1. Import `ApolloClient`, `HttpLink`, and `InMemoryCache`

1. Create a new Meteor client connection, this essentially connects your app to a new graphql application
    * Create a new httpLink with a property of uri (which is the graphql server)
    * Create a cache variable
    * Create a client variable

1. Import ApolloProvider from react-apollo package
    * Create a new react component called ApolloApp

Now our application is aware of our Apollo server