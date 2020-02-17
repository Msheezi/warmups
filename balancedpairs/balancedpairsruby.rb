
def balancedpairs (str)
    stack = []
    dict = {
        "}" => "{",
        "]" => "[",
        ")" => "("
    }
    str.each_char do |char| 
        if dict.values.include?(char)
            stack.push(char)
        end
        if dict.keys.include?(char)
            return false if stack.empty?
            return false if stack[-1]!= dict[char]
            stack.pop
        end
    end
    return false if !stack.empty?
    return true
end
        
puts balancedpairs("()")  # true
puts balancedpairs(")")  # false
puts balancedpairs("))")  # false
puts balancedpairs("()))") # false
puts balancedpairs("((()))")  # true
puts balancedpairs("({})") # true
puts balancedpairs("({])") # false