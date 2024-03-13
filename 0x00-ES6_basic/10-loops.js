export default function appendToEachArrayValue(array, appendString) {
  const Arr = [];
  for (const value of array) {
    Arr.push(appendString + value);
  }
  return Arr;
}
