class Kata {

  maxdiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0;
  }
}

module.exports = {
  Kata,
};