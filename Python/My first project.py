Name=input("Name:")
Recipien_Name=input('Recipien_Name:')
N=input("number of days:")
Contact_Information=input("Contact:")
start_date=input("start date:")
end_date=input("end date:")
reason=input("reason:")

letter_1=f"""Dear {Recipien_Name},

I am writing to formally request leave for {N} days starting from {start_date} to {end_date}. The reason for my leave is because of {reason}.

I have made arrangements for any urgent tasks and will ensure a smooth transition during my absence. Should you need any additional information or assistance, please feel free to contact me via {Contact_Information}.

I kindly request you to approve my leave. Thank you for your understanding and support.

Sincerely,
{Name}"""

print(letter_1)
