# Intern_task
The Api is a simple crud App done using node express and MongoDb.<br/>
The development and production modes are done with the help of webpack. Webpack is a module which helps to bundle all the different modules,files into a single file which helps to reduce the load on the application and improves the performance.
So this allows the developer to work with the development mode while ensuring that the optimized output is used in production mode.</br>
To know more about webpack [click here](https://webpack.js.org/guides/getting-started/)

## To Setup The Api Locally 
Step -1 : Clone the repository

Step -2 : Install all the dependencies by using the command <code>npm install</code>.

Step -3 : Create a cluster in the mongodb atlas and click on the connect button in the mongodb website, where you will get the URI to connect to node.js.<br/> To view on how to setup mongdb cluster <b>[click here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)</b>

step -4 : create <code>.env</code> file and add following Key value pairs
  - <code>PORT</code> = "The port on which you want to run the api"</p>
  - <code>PASSWORD</code> = "Password to mongoose cluster"</p>
 
Step -5 : Use any of the following commands to run the app<br/>
- <code>npm start</code> - To run the application normally  <br/>
- <code>npm run build:dev</code> - To create the development build using weback as bundler<br/>
- <code>npm run build:prod</code> - To create the production build using weback as bundler<br/>
- <code>npm run start:dev</code> - To run the development build of the application which is complied by using <code>npm run build:dev</code><br/>
- <code>npm run start:prod</code> - To run the product build of the application which is complied by using <code>npm run build:prod</code><br/>
- <code>npm run start:multi</code> - To run the cluster.js file which will initiate the multiple workers listening to different ports. This will help to reduce the load of the system by sending the requests to the worker processes.

After running this, go to postman which helps to build and use api. So you can test the CRUD operation in the postman.


## To Know more about the Api 
Here is the link that gives you an overview of how this CRUD operations are working in this application. <br/>
https://documenter.getpostman.com/view/21313349/2s93eYWCob<br/>
In documentaion user can view both the success and failure response as show in the figure<br/>
![image](https://user-images.githubusercontent.com/88759473/236918105-e32db821-8a94-44cb-a3fe-25d48b22fdec.png)

You can view the different kind of requests made and their response.
