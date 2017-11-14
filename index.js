const app = "I don't do much."

function destructivelyAppendKitten(array, name){
  var array = [...array]
  array.unshift(name)
  return array
}
