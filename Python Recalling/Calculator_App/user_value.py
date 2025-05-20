num1 = float(input())
operator = input("+,-,/,* : ")
num2 = float(input())


def caluclations(num1,num2,operator):
    if operator == "+":
       return num1 + num2
    elif operator == "-":
        return num1 - num2
    elif operator == "/":
        return num1 / num2
    elif operator == "*":
        return num1 * num2
    else:
        return "Invalid"


print(num1)
print(operator)
print(num2)
output = caluclations(num1,num2,operator)
print(output)