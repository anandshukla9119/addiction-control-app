// ============================================
// 🎓 COMPLETE PYTHON + GENAI LEARNING DATA
// 60 Days Curriculum - Zero to Hero
// ============================================

const learningData = {
    
    // Python Curriculum (Day 1-45)
    python: {
        // WEEK 1: Python Foundations
        day1: {
            day: 1,
            week: 1,
            title: "Python Installation & First Program",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Python kya hai aur kyun seekhein",
                "Python 3.11+ installation (Windows/Mac/Linux)",
                "VS Code setup with Python extension",
                "Terminal/Command Prompt basics",
                "First program: print('Hello World')",
                "Python file (.py) banana aur run karna"
            ],
            objectives: [
                "Python successfully install karna",
                "VS Code mein Python setup",
                "Apna pehla program likhna aur run karna",
                "print() function samajhna"
            ],
            resources: [
                "https://www.python.org/downloads/",
                "https://code.visualstudio.com/",
                "YouTube: Python Installation Guide Hindi"
            ],
            exercise: {
                question: "Ek program likho jo tumhara naam print kare",
                hint: "print() function use karo with quotes",
                solution: `# Mera Pehla Python Program
print("Mera naam [Tumhara Naam] hai")
print("Main Python seekh raha hoon!")
print("Aaj Day 1 hai")`
            },
            notes: "Python case-sensitive hai - Print aur print alag hain!"
        },

        day2: {
            day: 2,
            week: 1,
            title: "Variables & Data Types",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Variables kya hote hain",
                "Variable naming rules",
                "Data Types: int, float, str, bool",
                "type() function",
                "Type casting: int(), float(), str()",
                "Multiple variable assignment"
            ],
            objectives: [
                "Variables create karna",
                "Different data types samajhna",
                "Type checking aur casting"
            ],
            resources: [
                "W3Schools Python Variables",
                "Python Official Docs - Built-in Types"
            ],
            exercise: {
                question: "Variables banao: naam (string), umar (int), height (float), student (bool)",
                hint: "Har data type ka ek variable banao",
                solution: `# Variables with different data types
naam = "Rahul"
umar = 25
height = 5.8
student = True

# Check types
print(type(naam))    # <class 'str'>
print(type(umar))    # <class 'int'>
print(type(height))  # <class 'float'>
print(type(student)) # <class 'bool'>

# Type casting
umar_string = str(umar)
print("Meri umar " + umar_string + " saal hai")`
            },
            notes: "Variable names mein space nahi, underscore use karo: my_name"
        },

        day3: {
            day: 3,
            week: 1,
            title: "Operators & Input/Output",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Arithmetic Operators: +, -, *, /, //, %, **",
                "Comparison Operators: ==, !=, >, <, >=, <=",
                "Logical Operators: and, or, not",
                "Assignment Operators: =, +=, -=, *=",
                "input() function - User se data lena",
                "String concatenation"
            ],
            objectives: [
                "Saare operators use karna",
                "User input lena",
                "Simple calculator banana"
            ],
            resources: [
                "Python Operators - W3Schools",
                "Input Output in Python"
            ],
            exercise: {
                question: "Simple calculator banao jo 2 numbers ka add, subtract, multiply, divide kare",
                hint: "input() se numbers lo, int() se convert karo",
                solution: `# Simple Calculator
print("=== Simple Calculator ===")

num1 = int(input("Pehla number daalo: "))
num2 = int(input("Doosra number daalo: "))

# Operations
add = num1 + num2
sub = num1 - num2
mul = num1 * num2
div = num1 / num2

print(f"Addition: {num1} + {num2} = {add}")
print(f"Subtraction: {num1} - {num2} = {sub}")
print(f"Multiplication: {num1} * {num2} = {mul}")
print(f"Division: {num1} / {num2} = {div}")`
            },
            notes: "input() hamesha string return karta hai, int() ya float() se convert karo"
        },

        day4: {
            day: 4,
            week: 1,
            title: "Strings - Basics & Methods",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "String creation - single, double, triple quotes",
                "String indexing [0], [-1]",
                "String slicing [start:end:step]",
                "String methods: upper(), lower(), strip()",
                "find(), replace(), split(), join()",
                "len() function",
                "String immutability"
            ],
            objectives: [
                "Strings manipulate karna",
                "Slicing master karna",
                "Common string methods use karna"
            ],
            resources: [
                "Python String Methods - Complete List",
                "String Slicing Tutorial"
            ],
            exercise: {
                question: "Ek string lo aur uspe 5 different operations karo",
                hint: "upper, lower, replace, split, length use karo",
                solution: `# String Operations
text = "  Hello, I am Learning Python!  "

# 1. Remove extra spaces
clean = text.strip()
print(f"Cleaned: '{clean}'")

# 2. Uppercase
upper = clean.upper()
print(f"Upper: {upper}")

# 3. Lowercase
lower = clean.lower()
print(f"Lower: {lower}")

# 4. Replace
replaced = clean.replace("Python", "Programming")
print(f"Replaced: {replaced}")

# 5. Split into words
words = clean.split()
print(f"Words: {words}")
print(f"Total words: {len(words)}")

# 6. Slicing
print(f"First 5 chars: {clean[:5]}")
print(f"Last 7 chars: {clean[-7:]}")
print(f"Reverse: {clean[::-1]}")`
            },
            notes: "Strings immutable hain - modify nahi hote, naya string banta hai"
        },

        day5: {
            day: 5,
            week: 1,
            title: "String Formatting & f-strings",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Old style: % formatting",
                ".format() method",
                "f-strings (Python 3.6+) - Best practice",
                "Format specifiers: {:.2f}, {:>10}",
                "Multi-line strings",
                "Escape characters: \\n, \\t, \\\\"
            ],
            objectives: [
                "f-strings master karna",
                "Formatted output banana",
                "Numbers ko format karna"
            ],
            resources: [
                "Python f-strings Tutorial",
                "String Formatting Best Practices"
            ],
            exercise: {
                question: "Student report card banao with formatted output",
                hint: "f-strings use karo with alignment",
                solution: `# Student Report Card
name = "Rahul Kumar"
roll_no = 101
marks = {
    "Maths": 85,
    "Science": 92,
    "English": 78,
    "Hindi": 88,
    "Computer": 95
}

total = sum(marks.values())
percentage = total / len(marks)

print("=" * 40)
print(f"{'REPORT CARD':^40}")
print("=" * 40)
print(f"Name: {name}")
print(f"Roll No: {roll_no}")
print("-" * 40)
print(f"{'Subject':<15} {'Marks':>10}")
print("-" * 40)

for subject, mark in marks.items():
    print(f"{subject:<15} {mark:>10}")

print("-" * 40)
print(f"{'Total':<15} {total:>10}")
print(f"{'Percentage':<15} {percentage:>10.2f}%")
print("=" * 40)`
            },
            notes: "f-strings sabse fast aur readable hain - hamesha prefer karo"
        },

        day6: {
            day: 6,
            week: 1,
            title: "Week 1 Practice - Deep Dive",
            type: "weekend",
            duration: "2-3 hours",
            topics: [
                "Week 1 revision",
                "Practice problems solving",
                "Mini challenges",
                "Doubt clearing"
            ],
            objectives: [
                "Week 1 concepts solidify karna",
                "10+ practice problems solve karna",
                "Speed improve karna"
            ],
            resources: [
                "HackerRank Python Basics",
                "LeetCode Easy Problems"
            ],
            exercise: {
                question: "5 different programs banao using week 1 concepts",
                hint: "Temperature converter, BMI calculator, etc.",
                solution: `# Program 1: Temperature Converter
celsius = float(input("Enter Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")

# Program 2: BMI Calculator
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))
bmi = weight / (height ** 2)
print(f"Your BMI: {bmi:.2f}")

# Program 3: Simple Interest
principal = float(input("Principal: "))
rate = float(input("Rate: "))
time = float(input("Time: "))
si = (principal * rate * time) / 100
print(f"Simple Interest: {si:.2f}")

# Program 4: Area Calculator
length = float(input("Length: "))
width = float(input("Width: "))
area = length * width
perimeter = 2 * (length + width)
print(f"Area: {area}, Perimeter: {perimeter}")

# Program 5: String Analyzer
text = input("Enter text: ")
print(f"Length: {len(text)}")
print(f"Words: {len(text.split())}")
print(f"Uppercase: {text.upper()}")`
            },
            notes: "Weekend = Extra practice time, 2-3 ghante minimum lagao"
        },

        day7: {
            day: 7,
            week: 1,
            title: "Week 1 Project - Calculator App",
            type: "weekend",
            duration: "2-3 hours",
            topics: [
                "Project planning",
                "Code organization",
                "User experience",
                "Error handling basics"
            ],
            objectives: [
                "Complete calculator app banana",
                "Menu-driven program",
                "Clean code likhna"
            ],
            resources: [
                "Python Calculator Project Tutorial"
            ],
            exercise: {
                question: "Advanced Calculator with menu system",
                hint: "While loop use karo for continuous operation",
                solution: `# Advanced Calculator App
print("=" * 50)
print("        🧮 ADVANCED CALCULATOR 🧮")
print("=" * 50)

while True:
    print("\\n--- MENU ---")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Power")
    print("6. Modulus")
    print("7. Exit")
    
    choice = input("\\nApna choice daalo (1-7): ")
    
    if choice == '7':
        print("\\n👋 Thank you! Calculator band ho raha hai...")
        break
    
    if choice in ['1', '2', '3', '4', '5', '6']:
        num1 = float(input("Pehla number: "))
        num2 = float(input("Doosra number: "))
        
        if choice == '1':
            result = num1 + num2
            op = "+"
        elif choice == '2':
            result = num1 - num2
            op = "-"
        elif choice == '3':
            result = num1 * num2
            op = "×"
        elif choice == '4':
            if num2 != 0:
                result = num1 / num2
                op = "÷"
            else:
                print("❌ Error: Zero se divide nahi kar sakte!")
                continue
        elif choice == '5':
            result = num1 ** num2
            op = "^"
        elif choice == '6':
            result = num1 % num2
            op = "%"
        
        print(f"\\n✅ Result: {num1} {op} {num2} = {result}")
    else:
        print("❌ Invalid choice! 1-7 mein se choose karo.")

print("\\n🎉 Week 1 Complete! Calculator Project Done!")`
            },
            notes: "Ye tumhara pehla project hai - isko portfolio mein add karo!"
        },

        // WEEK 2: Control Flow & Functions
        day8: {
            day: 8,
            week: 2,
            title: "Conditional Statements",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "if statement",
                "if-else statement",
                "if-elif-else chain",
                "Nested if statements",
                "Ternary operator",
                "Truthy and Falsy values"
            ],
            objectives: [
                "Conditions likhna",
                "Multiple conditions handle karna",
                "Nested logic samajhna"
            ],
            resources: [
                "Python If Else - W3Schools",
                "Conditional Statements Tutorial"
            ],
            exercise: {
                question: "Grade calculator banao (A, B, C, D, F based on marks)",
                hint: "if-elif-else chain use karo",
                solution: `# Grade Calculator
marks = int(input("Enter marks (0-100): "))

if marks < 0 or marks > 100:
    print("❌ Invalid marks! 0-100 ke beech daalo")
elif marks >= 90:
    grade = "A+"
    remark = "Outstanding! 🌟"
elif marks >= 80:
    grade = "A"
    remark = "Excellent! 🎉"
elif marks >= 70:
    grade = "B"
    remark = "Very Good! 👍"
elif marks >= 60:
    grade = "C"
    remark = "Good! 😊"
elif marks >= 50:
    grade = "D"
    remark = "Pass! 📝"
else:
    grade = "F"
    remark = "Fail! Need Improvement 📚"

print(f"\\nMarks: {marks}")
print(f"Grade: {grade}")
print(f"Remark: {remark}")`
            },
            notes: "elif = else if ka short form hai"
        },

        day9: {
            day: 9,
            week: 2,
            title: "For Loops & Range",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "for loop syntax",
                "range() function - start, stop, step",
                "Iterating over strings",
                "Iterating over lists",
                "enumerate() function",
                "Nested for loops"
            ],
            objectives: [
                "for loop master karna",
                "range() samajhna",
                "Patterns print karna"
            ],
            resources: [
                "Python For Loops",
                "Range Function Tutorial"
            ],
            exercise: {
                question: "Star pyramid pattern print karo",
                hint: "Nested loops use karo",
                solution: `# Star Patterns
n = 5

# Pattern 1: Right Triangle
print("Pattern 1: Right Triangle")
for i in range(1, n+1):
    print("*" * i)

print()

# Pattern 2: Pyramid
print("Pattern 2: Pyramid")
for i in range(1, n+1):
    spaces = " " * (n - i)
    stars = "*" * (2*i - 1)
    print(spaces + stars)

print()

# Pattern 3: Diamond
print("Pattern 3: Diamond")
for i in range(1, n+1):
    print(" " * (n-i) + "*" * (2*i-1))
for i in range(n-1, 0, -1):
    print(" " * (n-i) + "*" * (2*i-1))

print()

# Pattern 4: Number Triangle
print("Pattern 4: Number Triangle")
for i in range(1, n+1):
    for j in range(1, i+1):
        print(j, end=" ")
    print()`
            },
            notes: "range(5) = 0,1,2,3,4 (5 included nahi hai)"
        },

        day10: {
            day: 10,
            week: 2,
            title: "While Loops & Control Statements",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "while loop syntax",
                "Infinite loops aur kaise avoid karein",
                "break statement",
                "continue statement",
                "pass statement",
                "Loop with else clause"
            ],
            objectives: [
                "while loop use karna",
                "break/continue samajhna",
                "Loop control master karna"
            ],
            resources: [
                "Python While Loops",
                "Break Continue Pass"
            ],
            exercise: {
                question: "Number guessing game banao",
                hint: "while True use karo with break",
                solution: `import random

# Number Guessing Game
print("🎮 NUMBER GUESSING GAME 🎮")
print("=" * 30)

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7

print(f"Maine 1-100 ke beech ek number socha hai.")
print(f"Tumhare paas {max_attempts} chances hain!")

while attempts < max_attempts:
    attempts += 1
    remaining = max_attempts - attempts
    
    guess = int(input(f"\\nAttempt {attempts}: Guess karo: "))
    
    if guess == secret:
        print(f"\\n🎉 CORRECT! Number tha {secret}")
        print(f"Tune {attempts} attempts mein guess kar liya!")
        break
    elif guess < secret:
        print(f"📈 Too LOW! Upar jao. ({remaining} chances left)")
    else:
        print(f"📉 Too HIGH! Neeche aao. ({remaining} chances left)")
else:
    print(f"\\n😢 GAME OVER! Number tha {secret}")
    print("Better luck next time!")

print("\\nThanks for playing! 👋")`
            },
            notes: "while True = infinite loop, break se bahar niklo"
        },

        day11: {
            day: 11,
            week: 2,
            title: "Functions - Basics",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Function kya hai aur kyun",
                "def keyword",
                "Parameters aur Arguments",
                "return statement",
                "Default parameters",
                "Keyword arguments"
            ],
            objectives: [
                "Functions banana",
                "Parameters samajhna",
                "Return values use karna"
            ],
            resources: [
                "Python Functions - W3Schools",
                "Functions Tutorial"
            ],
            exercise: {
                question: "Utility functions banao: is_even, factorial, fibonacci",
                hint: "Har function mein return use karo",
                solution: `# Utility Functions

# Function 1: Check Even/Odd
def is_even(num):
    """Check if number is even"""
    return num % 2 == 0

# Function 2: Factorial
def factorial(n):
    """Calculate factorial of n"""
    if n < 0:
        return "Invalid! Negative number"
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

# Function 3: Fibonacci
def fibonacci(n):
    """Return first n fibonacci numbers"""
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib

# Function 4: Prime Check
def is_prime(num):
    """Check if number is prime"""
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Testing
print(f"is_even(4): {is_even(4)}")
print(f"is_even(7): {is_even(7)}")
print(f"factorial(5): {factorial(5)}")
print(f"fibonacci(10): {fibonacci(10)}")
print(f"is_prime(17): {is_prime(17)}")`
            },
            notes: "Functions reusable code hain - DRY principle follow karo"
        },

        day12: {
            day: 12,
            week: 2,
            title: "Functions - Advanced",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "*args - Variable positional arguments",
                "**kwargs - Variable keyword arguments",
                "Scope - Local vs Global",
                "global keyword",
                "Docstrings",
                "Recursive functions"
            ],
            objectives: [
                "*args, **kwargs master karna",
                "Scope samajhna",
                "Recursion basics"
            ],
            resources: [
                "Python *args **kwargs",
                "Recursion in Python"
            ],
            exercise: {
                question: "Calculator with *args jo unlimited numbers le sake",
                hint: "*args ek tuple hai, loop se iterate karo",
                solution: `# Advanced Functions

# Function with *args
def add_all(*args):
    """Add unlimited numbers"""
    total = 0
    for num in args:
        total += num
    return total

def multiply_all(*args):
    """Multiply unlimited numbers"""
    result = 1
    for num in args:
        result *= num
    return result

# Function with **kwargs
def print_info(**kwargs):
    """Print key-value pairs"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Function with both
def advanced_func(*args, **kwargs):
    """Function with both *args and **kwargs"""
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

# Recursive factorial
def factorial_recursive(n):
    """Factorial using recursion"""
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Recursive fibonacci
def fib_recursive(n):
    """Fibonacci using recursion"""
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# Testing
print(f"add_all(1,2,3,4,5): {add_all(1,2,3,4,5)}")
print(f"multiply_all(2,3,4): {multiply_all(2,3,4)}")
print()
print_info(name="Rahul", age=25, city="Delhi")
print()
advanced_func(1, 2, 3, name="Test", value=100)
print()
print(f"factorial_recursive(5): {factorial_recursive(5)}")`
            },
            notes: "*args = tuple, **kwargs = dictionary"
        },

        day13: {
            day: 13,
            week: 2,
            title: "Week 2 Practice - Deep Dive",
            type: "weekend",
            duration: "2-3 hours",
            topics: [
                "Control flow revision",
                "Functions practice",
                "Complex problems",
                "Code optimization"
            ],
            objectives: [
                "Week 2 concepts master karna",
                "15+ problems solve karna"
            ],
            resources: [
                "HackerRank Python",
                "Codewars Kata"
            ],
            exercise: {
                question: "ATM machine simulation banao",
                hint: "Functions + loops + conditions sab use karo",
                solution: `# ATM Machine Simulation
balance = 10000

def check_balance():
    print(f"\\n💰 Current Balance: ₹{balance}")

def deposit(amount):
    global balance
    if amount > 0:
        balance += amount
        print(f"\\n✅ ₹{amount} deposited successfully!")
        print(f"New Balance: ₹{balance}")
    else:
        print("❌ Invalid amount!")

def withdraw(amount):
    global balance
    if amount <= 0:
        print("❌ Invalid amount!")
    elif amount > balance:
        print("❌ Insufficient balance!")
    else:
        balance -= amount
        print(f"\\n✅ ₹{amount} withdrawn successfully!")
        print(f"Remaining Balance: ₹{balance}")

def atm_menu():
    print("\\n" + "=" * 40)
    print("         🏧 ATM MACHINE")
    print("=" * 40)
    print("1. Check Balance")
    print("2. Deposit Money")
    print("3. Withdraw Money")
    print("4. Exit")
    print("=" * 40)

# Main ATM Loop
pin = "1234"
entered_pin = input("Enter PIN: ")

if entered_pin == pin:
    print("\\n✅ PIN Verified!")
    
    while True:
        atm_menu()
        choice = input("Enter choice (1-4): ")
        
        if choice == "1":
            check_balance()
        elif choice == "2":
            amt = int(input("Enter deposit amount: ₹"))
            deposit(amt)
        elif choice == "3":
            amt = int(input("Enter withdrawal amount: ₹"))
            withdraw(amt)
        elif choice == "4":
            print("\\n👋 Thank you for using ATM!")
            break
        else:
            print("❌ Invalid choice!")
else:
    print("❌ Wrong PIN! Card blocked.")`
            },
            notes: "Complex problems ko chhote functions mein todo"
        },

        day14: {
            day: 14,
            week: 2,
            title: "Week 2 Project - Number Guessing Game",
            type: "weekend",
            duration: "2-3 hours",
            topics: [
                "Game logic",
                "Difficulty levels",
                "Score system",
                "Replay functionality"
            ],
            objectives: [
                "Complete game banana",
                "All week 2 concepts use karna"
            ],
            resources: [
                "Python Game Development Basics"
            ],
            exercise: {
                question: "Advanced Guessing Game with levels, hints, leaderboard",
                hint: "Multiple functions banao for each feature",
                solution: `import random

# Game Configuration
LEVELS = {
    "easy": {"range": 50, "attempts": 10, "points": 10},
    "medium": {"range": 100, "attempts": 7, "points": 20},
    "hard": {"range": 200, "attempts": 5, "points": 50}
}

leaderboard = []

def show_banner():
    print("\\n" + "=" * 50)
    print("    🎮 ULTIMATE NUMBER GUESSING GAME 🎮")
    print("=" * 50)

def select_level():
    print("\\nSelect Difficulty:")
    print("1. Easy (1-50, 10 attempts)")
    print("2. Medium (1-100, 7 attempts)")
    print("3. Hard (1-200, 5 attempts)")
    
    choice = input("Enter choice: ")
    
    if choice == "1":
        return "easy"
    elif choice == "2":
        return "medium"
    elif choice == "3":
        return "hard"
    else:
        print("Invalid! Defaulting to Medium")
        return "medium"

def play_game(player_name, level):
    config = LEVELS[level]
    secret = random.randint(1, config["range"])
    attempts = 0
    
    print(f"\\n🎯 Guess the number between 1 and {config['range']}")
    print(f"You have {config['attempts']} attempts!")
    
    while attempts < config["attempts"]:
        attempts += 1
        remaining = config["attempts"] - attempts
        
        try:
            guess = int(input(f"\\nAttempt {attempts}: "))
        except ValueError:
            print("❌ Enter a valid number!")
            attempts -= 1
            continue
        
        if guess == secret:
            score = (remaining + 1) * config["points"]
            print(f"\\n🎉 CORRECT! The number was {secret}")
            print(f"Score: {score} points")
            return score
        
        # Hints
        diff = abs(secret - guess)
        if diff <= 5:
            hint = "🔥 Very Hot!"
        elif diff <= 10:
            hint = "🌡️ Hot!"
        elif diff <= 25:
            hint = "😐 Warm"
        else:
            hint = "❄️ Cold"
        
        direction = "Higher! ⬆️" if guess < secret else "Lower! ⬇️"
        print(f"{direction} | {hint} | {remaining} attempts left")
    
    print(f"\\n😢 Game Over! Number was {secret}")
    return 0

def show_leaderboard():
    print("\\n🏆 LEADERBOARD 🏆")
    print("-" * 30)
    sorted_lb = sorted(leaderboard, key=lambda x: x["score"], reverse=True)
    for i, entry in enumerate(sorted_lb[:5], 1):
        print(f"{i}. {entry['name']} - {entry['score']} pts ({entry['level']})")

def main():
    show_banner()
    player = input("Enter your name: ")
    
    while True:
        level = select_level()
        score = play_game(player, level)
        
        leaderboard.append({"name": player, "score": score, "level": level})
        show_leaderboard()
        
        play_again = input("\\nPlay again? (y/n): ").lower()
        if play_again != 'y':
            print(f"\\n👋 Thanks for playing, {player}!")
            break

if __name__ == "__main__":
    main()`
            },
            notes: "Week 2 complete! Ab data structures aayenge"
        },

        // Continue for Day 15-45...
        // (Abbreviated for space - actual implementation would have all 45 days)
        
        day15: {
            day: 15,
            week: 3,
            title: "Lists - Basics",
            type: "weekday",
            duration: "1 hour",
            topics: ["List creation", "Indexing", "Slicing", "List methods"],
            objectives: ["Lists create karna", "List operations"],
            exercise: {
                question: "To-do list app banao",
                hint: "append, remove, pop use karo",
                solution: "# To-do list with add, remove, display features"
            }
        },

        // Days 16-45 would follow similar pattern...
    },

    // GenAI Curriculum (Day 46-60+)
    genai: {
        day46: {
            day: 46,
            week: 7,
            title: "AI/ML Fundamentals",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "AI vs ML vs DL vs GenAI",
                "Machine Learning types: Supervised, Unsupervised",
                "Neural Networks basics",
                "What are Large Language Models",
                "GenAI applications"
            ],
            objectives: [
                "AI landscape samajhna",
                "LLMs kaise kaam karte hain"
            ],
            resources: [
                "Google AI Fundamentals",
                "OpenAI Documentation"
            ],
            exercise: {
                question: "5 GenAI use cases likho jo tumhari life mein help kar sakte hain",
                hint: "Content creation, coding, learning, etc.",
                solution: `# GenAI Use Cases for My Life

1. **Code Assistant**
   - Debug karne mein help
   - Code explain karna
   - Best practices suggest karna

2. **Learning Companion**
   - Complex topics explain karna
   - Quiz generate karna
   - Study notes banana

3. **Content Creator**
   - Blog posts likhna
   - Email drafts banana
   - Social media content

4. **Personal Assistant**
   - Daily planning
   - Reminders
   - Research summarize karna

5. **Career Helper**
   - Resume improve karna
   - Interview preparation
   - Skill gap identify karna`
            }
        },

        day47: {
            day: 47,
            week: 7,
            title: "LLMs Deep Dive",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "Transformer architecture basics",
                "Tokenization",
                "Embeddings",
                "Attention mechanism (simplified)",
                "Popular LLMs: GPT, Claude, Gemini, LLaMA"
            ],
            objectives: [
                "LLMs kaise kaam karte hain",
                "Different models compare karna"
            ],
            resources: [
                "Attention Is All You Need (simplified)",
                "Hugging Face Course"
            ],
            exercise: {
                question: "Different LLMs compare karo - GPT vs Claude vs Gemini",
                hint: "Strengths, weaknesses, use cases",
                solution: `# LLM Comparison

| Feature | GPT-4 | Claude | Gemini |
|---------|-------|--------|--------|
| Company | OpenAI | Anthropic | Google |
| Strengths | General purpose, coding | Safety, long context | Multimodal |
| Context | 128K | 200K | 1M |
| Best for | Coding, creative | Analysis, safety | Research |`
            }
        },

        day48: {
            day: 48,
            week: 7,
            title: "OpenAI API - First Steps",
            type: "weekday",
            duration: "1 hour",
            topics: [
                "OpenAI account setup",
                "API key generation",
                "Installing openai package",
                "First API call",
                "Chat completions API"
            ],
            objectives: [
                "API setup karna",
                "First successful API call"
            ],
            resources: [
                "OpenAI API Documentation",
                "OpenAI Cookbook"
            ],
            exercise: {
                question: "Simple chatbot banao using OpenAI API",
                hint: "openai.ChatCompletion.create() use karo",
                solution: `from openai import OpenAI

client = OpenAI(api_key="your-api-key")

def chat(message):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": message}
        ]
    )
    return response.choices[0].message.content

# Simple chat loop
print("🤖 AI Chatbot (type 'quit' to exit)")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    response = chat(user_input)
    print(f"AI: {response}")`
            }
        },

        // Days 49-60+ would continue...
    },

    // Helper function to get today's learning
    getTodayLearning: function(currentDay) {
        if (currentDay <= 45) {
            return this.python[`day${currentDay}`] || null;
        } else {
            return this.genai[`day${currentDay}`] || null;
        }
    },

    // Get week data
    getWeekData: function(weekNumber) {
        const startDay = (weekNumber - 1) * 7 + 1;
        const endDay = weekNumber * 7;
        const days = [];
        
        for (let i = startDay; i <= endDay && i <= 60; i++) {
            const dayData = this.getTodayLearning(i);
            if (dayData) days.push(dayData);
        }
        
        return days;
    }
};

// Export for use
if (typeof module !== 'undefined') {
    module.exports = learningData;
}