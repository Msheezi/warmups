
# write an algo that checks if pairs are balanced


def balancedpairs(str):

    stack = []
    dictionary = {
        ")": "(",
        "}": "{",
        "]": "["}
    for char in str:
        if char in dictionary.values():
            stack.append(char)
        if char in dictionary.keys():
            if len(stack) == 0:
                return False
            if stack[-1] != dictionary[char]:
                return False
            stack.pop()
    if len(stack) > 0:
        return False
    return True


print(balancedpairs("()"))  # true
print(balancedpairs(")"))  # false
print(balancedpairs("))"))  # false
print(balancedpairs("()))"))  # false
print(balancedpairs("((()))"))  # true
print(balancedpairs("({})"))  # true
print(balancedpairs("({])"))  # false
