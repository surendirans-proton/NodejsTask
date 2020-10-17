## Workflow
1. Initializing the Express application.
2. Created the Mongoose Connection
3. Created the delete Router in Categories routers.
4. Checking the body data contains the data or not.
5. Checking the Category in the Categories collection.
6. If valid Category, then storing the deleted records in the variable
and deleting the both Products and Category
7. Returning the Deleted records as Response.
8. Incase if any error occurs in the process, it will throw the error as 500 status.

## Used Dependencies.
1. ExpressJS
2. MongoDB
3. Mongoose
4. nodemon