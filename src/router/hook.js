
export default {

  beforeEach: (to, from, next) => {
    document.title = to.meta.title

    // if (to.path === '/lhsReceive') {

    // }
    next()
  }
}
