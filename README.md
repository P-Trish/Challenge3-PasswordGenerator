# 03 JavaScript: Password Generator

## Description

In this third bootcamp challenge we were tasked with creating a password generator using JavaScript. The motivation for this project was to use our new skills learned in JavaScript to take the existing page for a Password Generator and make it actively generate a password for the end user.  This project was built so that I could apply what I've learned in creating variables, functions, using methods, and calling functions to validate user selections in JavaScript.  This solves the problem of only having a static webpage just containing HTML and CSS.  By adding JavaScript, the webpage came to life and a secure password could be generated.  This also allowed the user who comes upon the page to interact with it and is prompted to answer questions about length, letter case, as well as character and number selection to generate their ideal secure password.   In this challenge, I learned that order of operations in JavaScript is strict such that the order of the code affects the outcome so I must be intentional with the code I write.  Writing the steps out in psedo-code prior to coding helped keep the process linear.  



## Installation

N/A

## Usage

When the user clicks the "Generate Password" button, the first prompt that appears is to choose the length of the password which is set to be greater than 8 or less than 128 characters.  If the user chooses a number less than 8 or greater than 128, they are alerted to choose a number betwee 8 and 128 characters.  

![alt text](/Develop/assets/assets/Prompt1-LengthOfPW.png)
![alt text](/Develop/assets/assets/Alert1-ChooseBetween8-128.png)

Once the user chooses a number witin 8 and 128 characters they are prompted to confirm if they want uppercase letters, lowercase letters, special characters, and numbers. 

If they choose no for all prompts they are alerted to "Please make at least one selection."

![alt text](/Develop/assets/assets/PleaseMade1Selection.png)

If all the password criteria is fulfilled, such that the user chooses a length between 8 and 128 and chooses to at least one option to have uppercase letters, lowercase letters, numbers, or characters, then a password will be generated that reflects the user preferences chosen.

![alt text](/Develop/assets/assets/PasswordGenerated.png)

Additionally, the user is also given the option to copy the password to clipboard.  

  ![alt text](/Develop/assets/assets/CopyPWtoClipboard.png)

## Credits

I collaborated with my bootcamp classmate Emma Daily to create this password generator.  Side by side we shared tips on how to get started, how and why certain functions would work and general our general knowledge of JavaScript as applied to creating this password generator. Ultimately tested each others' code to make sure it worked.  

I would also like to credit my tutor Ashton who walked me through the process of creating a function and tested my knowledge as well as helped and encouraged me to find the correct answer to make my code work smoothly.  

Lastly I'd like to credit our bootcamp TA Shawn who took a look at my code to call out syntax errors and also helped me make sure my code ran smoothly.  

## License

N/A

## Features

In addition to generating the password, there is an additional feature to copy the password to clipboard.  
