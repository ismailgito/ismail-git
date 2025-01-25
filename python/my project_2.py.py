name=input('NAME:')
adress=input("Adress:")
City=input("City:")
state=input("state:")
pincode=input('pincode:')
email=input("email:")
mobile=input("mobile:")
date=input("date:")
Recept=input("Recipient's Name:")
Designation=input("Designation:")
Company_Organization_name=input("Company/Organization Name:")
adress2=input("recepit adress:")
start_date=input("start date:")
end_date=input("end date:")
brief_reason=input("brief reason:")

#letter template
letter_template_1=f"""
{name},
{adress},
{City},{state},{pincode}
{email},
{mobile},

{date},

To,
{Recept},
{Designation},
{Company_Organization_name},
{adress2},

Subject: Request for Leave

Dear {Recept} ,

I am writing to request leave from {start_date}  to {end_date}  due to {brief_reason}, I will ensure that all my responsibilities are properly handed over and managed by [colleague's name, if applicable].

Please let me know if you need any further information. I would be grateful for your kind consideration of this request.

Thank you for your understanding and support.

Sincerely,
{name},
{Designation},
{Company_Organization_name},

"""

print=(letter_template_1)