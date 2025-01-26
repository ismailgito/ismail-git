# Mad Libs Game in Python

# Get user inputs for the story
noun1 = input("Enter a noun: ")
verb1 = input("Enter a verb: ")
adjective1 = input("Enter an adjective: ")
place = input("Enter a place: ")
noun2 = input("Enter another noun: ")
verb2 = input("Enter another verb: ")
adjective2 = input("Enter another adjective: ")

# Mad Libs story
madlib = f"""
Once upon a time, in a {adjective1} {place}, there was a {noun1} who loved to {verb1}.
Everyone in the town knew about the {noun1}'s love for {verb1}, but they were also amazed by its {adjective2} {noun2}.
One day, while {verb2} near the {place}, something extraordinary happened, changing everything forever.
"""

# Display the Mad Libs story
print(madlib)
