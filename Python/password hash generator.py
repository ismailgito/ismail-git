mok=1
while mok<5:
    import hashlib
    h= hashlib.new("SHA256")
    correct_password=input("Enter a new password:")
    correct_password_2=input("Enter a new password again:")
    
    if correct_password==correct_password_2:
        h.update (correct_password.encode())
        h.update (correct_password_2.encode())
        password_hash=h.hexdigest()
        print("Hash successfully generated ")
        print(password_hash)
        
    else:
        print (f"""password doesn't match""")