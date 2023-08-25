# Module 7
## GitHub, Testing and the DOM

In Module 7: Introduction to GitHub, Testing, and the DOM, you will learn about GitHub workflows, which will allow you to collaborate on code from public repositories. You will get started with unit testing and the test-driven development process in order to validate that your code functions as intended.  Finally, you will work with the Document Object Model to ensure that JavaScript and HTML interact with the browser to make your web page functional. 

### Course Learning Outcomes Addressed
* Explain the key web programming concepts
* Build web applications using JavaScript, HTML, and CSS
* Design and code user interactions on web pages
* Define and break down modern software development life cycle processes
* Set up code management tools, such as GitHub

### Set up SSH Keys
* Make sure that GitHub account exists and Git exists on the system.
* Use the command given below to generate SSH keys:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
* Enter the name of the file when prompted

### Add SSH Key to Agent
* Check if the agent is running
```
eval "$(ssh-agent -s)"
```
* If you are using Mac, add the following lines in the config file ($ cat config):
```
Host *
 AddKeysToAgent yes 
 UseKeychain yes
 IdentityFile ~/.ssh/your_key_file_name
```
* Then execute the following command in the terminal:
```
ssh-add -K ~/.ssh/your_key_file_name
```
* Next, execute:
```
cat your_key_file_name.pub
```
* Copy the public key content and paste it in GitHub > Settings > SSH and GPG Keys > New SSH Key and add:
 - title: your_key_file_name
 - Key: paste the entire key content
* Press **Add SSH Key**

### How GitHub and Git Work
Some visual representations to help you understand GitHub and Git workflow:

![Basic of Git and GitHub](https://miro.medium.com/v2/resize:fit:1400/1*irvoqLol7t-EPNzZN6CSnA.png)
![Git and GitHub Flow](https://images.datacamp.com/image/upload/v1651047046/image10_1a4384e5fa.png)
![Local and Global Workflow](https://1.bp.blogspot.com/-n8gwrM5Bf04/UfosDLuuDUI/AAAAAAAAKwg/2aE3V0NDk-g/s1600/git-and-github-workflow.png)

### VS Code GitHub Integration

* Click **Ctrl+Shift+X** and search for **GitHub**
* Install the GitHub extension

_Note: The GitHub extension might be depreciated. You can try **GitHub Pull Requests and Issues** instead._

### Introduction to Testing
* Previously, we had a standard SDLC to develop softwares and had a separate testing phase. Now, we don't use models like waterfall or v-model. Instead, we use Agile with DevOps which automates the testing process in the Test Driven Development (TDD).
* For this module, we'll use [Jest](https://jestjs.io/).
* For the setup, install [Nodejs](https://nodejs.org/en/).
* Read [this article](https://medium.com/@suvodeep4119/javascript-tdd-using-jest-9b535c6be7be) Links to an external site.on test-driven development with Jest. After you are done, write a unit test in pseudocode that would test the functionality of a calculator program described below: 
 - The calculator program should add, subtract, multiply, and divide numbers.
 - Write it like:
 ```
 test (calculator should add two numbers together)
 expect the sum of (number1, number2) to be (some other number)
 ```

### Write Your First Test
* Clone the [repository](https://github.com/kogsio/greeting).
* Navigate to the directory and run `npm install` to install the required dependencies.
* Run: `npm test`.

### How HTTP and WWW Works
* Understanding the flow of HTTP
![Understanding the flow of HTTP](https://miro.medium.com/v2/resize:fit:1400/1*6HVQfiRwxSg7Y5yo3rGWlQ.png)

### DOM in JS
![JavaScript HTML DOM](https://www.w3schools.com/js/pic_htmltree.gif)
* If we add the internal script before `<body>` tag, then it might give error in the console section.
* To avoid this, we can wrap it in `window.load()`.

### PacMan Exercise
* a Factory that can produce a lot of PacMen.
* Each PacMan should have keep track of its position and velocity.
