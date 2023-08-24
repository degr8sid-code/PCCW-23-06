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
- If you are using Mac, add the following lines in the config file ($ cat config):
```
Host *
 AddKeysToAgent yes 
 UseKeychain yes
 IdentityFile ~/.ssh/your_key_file_name
```
- Then execute the following command in the terminal:
```
ssh-add -K ~/.ssh/your_key_file_name
```
- Next, execute:
```
cat your_key_file_name.pub
```
- Copy the public key content and paste it in GitHub > Settings > SSH and GPG Keys > New SSH Key and add:
 - title: your_key_file_name
 - Key: paste the entire key content
- Press ** Add SSH Key **

### How GitHub and Git Work
Some visual representations to help you understand GitHub and Git workflow:

![Basic of Git and GitHub](https://miro.medium.com/v2/resize:fit:1400/1*irvoqLol7t-EPNzZN6CSnA.png)

### VS Code GitHub Integration