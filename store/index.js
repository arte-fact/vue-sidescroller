import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_UP = "SET_UP"
const SET_DOWN = "SET_DOWN"
const SET_LEFT = "SET_LEFT"
const SET_RIGHT = "SET_RIGHT"
const SET_JUMP = "SET_JUMP"
const SET_ATTACK = "SET_ATTACK"
const UNSET_UP = "UNSET_UP"
const UNSET_DOWN = "SUNET_DOWN"
const UNSET_LEFT = "UNSET_LEFT"
const UNSET_RIGHT = "UNSET_RIGHT"
const UNSET_JUMP = "SET_JUMP"
const UNSET_ATTACK = "SET_ATTACK"

const store = () => new Vuex.Store({
  state: {
    up: false,
    down: false,
    left: false,
    right: false,
    jump: false,
    attack: false
  },

  getters: {
    isUp (state) {
      return state.up
    },
    isDown (state) {
      return state.down
    },
    isLeft (state) {
      return state.left
    },
    isRight (state) {
      return state.right
    },
    isJumping (state) {
      return state.jump
    },
    isAttacking (state) {
      return state.attack
    }
  },

  mutations: {
    [SET_UP] (state) {
      state.up = true
    },
    [SET_DOWN] (state) {
      state.down = true
    },
    [SET_LEFT] (state) {
      state.left = true
    },
    [SET_RIGHT] (state) {
      state.right = true
    },
    [SET_JUMP] (state) {
      state.jump = true
    },
    [SET_ATTACK] (state) {
      state.attack = true
    },
    [UNSET_UP] (state) {
      state.up = false
    },
    [UNSET_DOWN] (state) {
      state.down = false
    },
    [UNSET_LEFT] (state) {
      state.left = false
    },
    [UNSET_RIGHT] (state) {
      state.right = false
    },
    [UNSET_JUMP] (state) {
      state.jump = false
    },
    [UNSET_ATTACK] (state) {
      state.attack = false
    }
  },

  actions: {
    setUp () {
      commit(SET_UP)
    },
    setDown () {
      commit(SET_DOWN)
    },
    setLeft () {
      commit(SET_LEFT)
    },
    setRight () {
      commit(SET_RIGHT)
    },
    setJump () {
      commit(SET_JUMP)
    },
    setAttack () {
      commit(UNSET_ATTACK)
    },
    unsetUp () {
      commit(UNSET_UP)
    },
    unsetDown () {
      commit(UNSET_DOWN)
    },
    unsetLeft () {
      commit(UNSET_LEFT)
    },
    unsetRight () {
      commit(UNSET_RIGHT)
    },
    unsetJump () {
      commit(UNSET_JUMP)
    },
    unsetAttack () {
      commit(UNSET_ATTACK)
    }
  }
})

export default store

