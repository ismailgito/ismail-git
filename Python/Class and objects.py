print("Founders list")
class founders:
    def __init__(self,name,net_worth,number_of_employees):
        self.name=name
        self.net_worth=net_worth
        self.number_of_employees=number_of_employees
    def display(self):
        print("name:",self.name)
        print("Net worth:",self.net_worth)
        print("workers:",self.number_of_employees)
 # objects of bussiness man       
p1=founders("Ajmal","8Cr","5000")
p2=founders("ismail","7Cr","5500")
p3=founders("sufiyan","10Cr","10,000")
#########
p1.display()
p2.display()
p3.display()