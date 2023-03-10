<strong>Application Name: Mister Roboger's Neighborhood!</strong>

<strong>By Jannon Sielaff</strong>

-Programming Quiz-

<strong>Technologies Used:</strong>

* HTML
* JavaScript
* Markdown Language
* CSS Style Sheets
* Web Browser
* Text Editor/IDE - Visual Studio Code

<strong>Description:</strong> (Please note: The TDD documentation is appended to the *END* of this README)

This is an exercise in arrays, branching, and loops.  The functionality is as so - the website prompts the user for a number, whereupon logic is applied to the number, and then an array whose index is dependent on the number entered by the user is returned.  There will be logic within the function that applies different strings to different numbers, depending on which digits they contain.  For example, if a number contains the digit '1', then instead of returning the number, it will return "Beep!".  So for every number that contains a 1, it will return "Beep!".  There is also logic that supercedes this function in the case of '2' and '3'.  If the digit contains a 2, then the function will return "Boop!" and if the digit returns a 3, it will return "Won't you be my neighbor?".  This poses logic gating challenges, and so for the sake of hierarchy, the number 12 will display "Boop!", 13 will display "Won't you be my neighbor?" and number 23 will display "Won't you be my neighbor?".   

<strong>Setup/Installation Requirements:</strong>

Web Browser (to view rendered code)
Text Editor (to view raw code)
Image Editing/Viewing software (to look at pretty pictures)

In order to view this webpage, you have download the zip file (located at the bottom of the menu when you click the [<> Code ]), or clone the repository to a local drive.  Once you have the directory(ies) installed on your machine (or a clone of it), you can open the webpage using your default browser by double-clicking on the file marked 'index.html'

<strong>Link to Project Repository and link to Personal Repository:</strong>

This *particular* repository: https://github.com/Razieleron/week-3-coding-review<br>
My whole Repository: https://github.com/Razieleron/razieleron.github.io<br>

<strong>Known Bugs:</strong>

None Currently

<strong>TDD Documentation:</strong>

<strong>Describe misterRoboger()</strong>

<strong>Test:</strong> "It should return a 1 if the entry is 1"<br>
Code:<br>
let input = 1<br>
let number = []<br>
Expected Output: "1"


<strong>Test:</strong> "It should return a series of numbers up to 10."<br>
Code:<br>
let input = 10<br>
let number = []<br>
Expected Output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"


<strong>Test:</strong> "It should return 'Beep!' when the input is 1."<br>
Code:<br>
let input = 1<br>
let number = []<br>
Expected Output: "0, 'Beep!'" 


<strong>Test:</strong> "It should return 'Beep!' when the input is 10 as well as when it is 1."<br>
Code:<br>
let input = 10<br>
let number = []<br>
Expected Output: "0, 'Beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!'."


<strong>Test:</strong> "It should return 'Boop!' when the index is 2, and it should return 'Beep!'."
when the index is 1"<br>
Code:<br>
let input = 3<br>
let number = []<br>
Expected Output: "0, 'Beep!', 'Boop!', 3"


<strong>Test:</strong> "It should return 'Boop!' when the index is 12 - so the logic for 'Boop!'."
should supercede the logic for 'Beep!'"<br>
Code:<br>
let input = 12<br>
let number = []<br>
Expected Output: "0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!'"


<strong>Test:</strong> "It should return 'Won't you be my neighbor?' when the index is 3, 'Boop!' when the index is 2, and 'Beep!' when the index is 1." <br>
Code:<br>
let input = 3<br>
let number = []<br>
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'"


<strong>Test:</strong> "It should return 'Won't you be my neighbor?' when the index *contains* a 3, 'Boop!' when the index *contains* a 2, and 'Beep!' when the index *contains* a 1, no matter how high the number the user inputs."<br>
Code:<br>
let input = 100<br>
let number = []<br>
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 40, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 44, 45, 46, 47, 48, 49, 50, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 54, 55, 56, 57, 58, 59, 60, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 64, 65, 66, 67, 68, 69, 70, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 74, 75, 76, 77, 78, 79, 80, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 84, 85, 86, 87, 88, 89, 90, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 94, 95, 96, 97, 98, 99, 'Beep!'"

License:

Please reach out to me if you have any issues, questions or concerns at jannon.sielaff@gmail.com.  Please feel free to contact me or make a contribution/improvement to my code!

Copyright (c) January 13th, 2023 Jannon Sielaff