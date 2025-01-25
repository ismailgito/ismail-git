#student details
name=input("name:")
institution=input("institution:")
reg_no=input("reg no:")
department=input("department:")
contact=input("contact:")
dd=int(input("dd:"))
mm=int(input('mm:'))
yyyy=int(input('yyyy:'))
date=(dd,mm,yyyy)
Subject=input("reason:")
fro=input("from:")
to=input("to:")
#template 1 for letter writing 
letter_1=("dear",name,
          "I am writing to formally request leave starting from ",fro,"to",to,"The reason for my leave is "
           ,Subject,"I have made arrangements for any urgent tasks and will ensure a smooth transition during my absence."
            "Should you need any additional information or assistance, please feel free to contact me via",contact,"I kindly request you to approve my leave. Thank you for your understanding and support" 
            )
Sincerely=("Sincerely",name)
print=(letter_1)
print=(Sincerely)