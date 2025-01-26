print("welcome to love letter project by mohamed ismail")
print("you can select upto 5 templates only")
person=str(input("person:"))
temp=int(input("select a template number:"))
#####################
template_1= f"""Dear {person},
 Every moment with you feels like magic. Your smile lights up my darkest days, and your kindness touches my heart deeply. I admire your intelligence and strength, and I’m so grateful to have you in my life. You are my inspiration and my peace. I love you more than words can express, and I look forward to every day we’ll share together."""
######################
template_2= f"""Dear {person},
I feel incredibly lucky to be by your side. Your presence brings warmth and happiness to my life. Every day with you is a reminder of how special and amazing you are. I cherish our connection, and your love fills my heart with joy. I promise to stand by you through every challenge and celebrate every victory together. You mean the world to me."""
######################
template_3=f"""Dear {person},
Loving you has been the greatest adventure of my life. Your laughter, your wisdom, and your compassion make everything better. I admire the way you handle challenges with grace and how you uplift everyone around you. Being with you gives me purpose, and I’m thankful for every moment we share. You are my greatest blessing, and I love you endlessly."""
#########################
template_4=f"""Dear {person},
You are my heart and soul, the love I never knew I needed until I met you. Your beauty shines both inside and out, and every day with you feels like a dream. Your love is a gift I’ll treasure forever. I promise to always support, cherish, and love you. Together, we can face anything."""
template_5=f"""Dear {person},
From the moment I met you, I knew my life had changed. You bring joy and love to my world, and I can’t imagine life without you. Your strength, intelligence, and beauty inspire me every day. I feel truly blessed to walk this journey with you, and I promise to love and cherish you always. You’re my everything."""
# template is on 
# now you can your template
if (temp==1):
    print(template_1)
if (temp==2):
    print(template_2)
if (temp==3):
    print(template_3)
if (temp==4):
    print(template_4)
if (temp==5):
    print(template_5)
if (temp>5):
    print ("data not found")
    print("we already told you that you can select only templates no more than 5 templates")
