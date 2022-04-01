class Kata {

  maxdiff(list) {
    return list.sort()[list.length - 1] - list[0];
  }
}

module.exports = {
  Kata,
};