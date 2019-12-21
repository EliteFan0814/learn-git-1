export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  arr = document.cookie.match(reg)
  if (arr)
    return (arr[2]);
  else
    console.log(222)
  return null
}

console.log(111)