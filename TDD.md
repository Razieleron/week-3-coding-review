Describe misterRoboger()

Test: "It should return a 1 if the entry is 1"
Code:
let input = 1
let number = []
Expected Output: "1"

Test: "It should return a series of numbers up to 10"
Code:
let input = 10
let number = []
Expected Output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"

Test: "It should return 'Beep!' when the input is 1"
Code:
let input = 1
let number = []
Expected Output: "0, 'Beep!'" 

Test:"It should return 'Beep!' when the input is 10 as well as when it is 1"
Code:
let input = 10
let number = []
Expected Output: "0, 'Beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!"

Test:"It should return 'Boop!' when the index is 2, and it should return 'Beep!' when the index is 1"
Code:
let input = 3
let number = []
Expected Output: "0, 'Beep!', 'Boop!', 3"

Test:"It should return 'Boop!' when the index is 12 - so the logic for 'Boop!' should supercede the logic for 'Beep!'"
Code:
let input = 12
let number = []
Expected Output: "0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!'"

Test:"It should return 'Won't you be my neighbor?' when the index is 3, 'Boop!' when the index is 2, and 'Beep!' when the index is 1" 
Code:
let input = 3
let number = []
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'"

Test:"It should return 'Won't you be my neighbor?' when the index *contains* a 3, 'Boop!' when the index *contains* a 2, and 'Beep!' when the index *contains* a 1, no matter how high the number the user inputs"
Code:
let input = 100
let number = []
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 40, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 44, 45, 46, 47, 48, 49, 50, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 54, 55, 56, 57, 58, 59, 60, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 64, 65, 66, 67, 68, 69, 70, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 74, 75, 76, 77, 78, 79, 80, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 84, 85, 86, 87, 88, 89, 90, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 94, 95, 96, 97, 98, 99, 'Beep!'"

