const obj = {
  created () {
    this.$store.commit('hide')
  },
  destroyed () {
    this.$store.commit('show')
  },
  methods: {
    a () {
      console.log('aaaaaaaa')
    }
  }
}

export default obj
