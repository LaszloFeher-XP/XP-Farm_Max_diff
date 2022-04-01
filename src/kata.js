class Kata {

  maxdiff(list) {
    list.sort(function (a, b) {
      return a - b;
    });
    return list[list.length - 1] - list[0];
  }
}

module.exports = {
  Kata,
};