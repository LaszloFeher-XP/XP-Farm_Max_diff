class Kata {

  maxdiff(list) {
    list.sort((a, b) => {
      return a - b;
    });
    return list.length > 1 ? list[list.length - 1] - list[0] : 0;
  }
}

module.exports = {
  Kata,
};