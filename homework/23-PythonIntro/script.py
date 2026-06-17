name = input('Enter Your Name:')
surnmae = input('Enter Your Surname:')
age = int(input('Enter Your Age:'))

print("Անուն։", name)
print("Ազգանուն։", surnmae)
print("Տարիք։", age)

salary = int(input('Enter Your Salary:'))
days = int(input('Enter Your Working Days:'))

print(salary * days)

password = input('Enter WI-FI Password:')

if len(password) >= 8:
    print("Վավեր գաղտնաբառ")
else:
    print("ԱնՎավեր գաղտնաբառ")

login = input('Enter Your Login:')
lpassword = input('Enter Your Password:')

if login == "admin" and lpassword == "1234":
    print("Մուտքը հաջողվեց")
else:
     print("Սխալ տվյալներ")


price = int(input('Enter Purchase price:'))

if price > 10000:
    price = price * 0.9

print(price)

wins = int(input())
draws = int(input())

points = wins * 3 + draws

print(points)

distance = float(input('Enter Distance:'))
fuel_100 = float(input())
fuel = (distance * fuel_100) / 100

print(fuel)

orders = int(input('Enter Orders Price:'))
ordersqunity = int(input('Enter Orders Qunity:'))

print(orders * ordersqunity)

tasks = [
    "Python",
    "React",
    "Sport",
    "Read",
    "Sleep"
]
for task in tasks:
    print(tasks)


