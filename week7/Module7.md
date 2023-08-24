# Module 7
## GitHub, Testing and the DOM

In Module 7: Introduction to GitHub, Testing, and the DOM, you will learn about GitHub workflows, which will allow you to collaborate on code from public repositories. You will get started with unit testing and the test-driven development process in order to validate that your code functions as intended.  Finally, you will work with the Document Object Model to ensure that JavaScript and HTML interact with the browser to make your web page functional. 

### Course Learning Outcomes Addressed
- Explain the key web programming concepts
- Build web applications using JavaScript, HTML, and CSS
- Design and code user interactions on web pages
- Define and break down modern software development life cycle processes
- Set up code management tools, such as GitHub

### Set up SSH Keys
- Make sure that GitHub account exists and Git exists on the system.
- Use the command given below to generate SSH keys:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
- Enter the name of the file when prompted

### Add SSH Key to Agent

- Check if the agent is running
```
eval "$(ssh-agent -s)"
```