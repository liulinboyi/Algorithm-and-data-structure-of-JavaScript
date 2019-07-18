function sort(str: String): String {
  let temp: String = str
    .split(/\s/g)
    .map(item => {
      return item
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
  return temp;
}

// module.exports = sort;
export default sort;
