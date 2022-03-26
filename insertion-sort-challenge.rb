def sort_itself(array)
  for i in 1...array.length
    value_to_insert = array[i]
    j = i - 1
    while j >= 0 && value_to_insert < array[j]
      array[j + 1] = array[j]
      j = j - 1
    end
    array[j + 1] = value_to_insert
    puts array.join(' ')
  end
end
