import firebase from '@/plugins/firebase';
import {vuexfireMutations, firestoreAction } from 'vuexfire';

const db = firebase.database();

export const state = () => ({
  users: [],
});

export const mutations = {
  ...vuexfireMutations,
};

export const getters = {
  getUsers: state => {
    return state.users;
  },
};

export const actions = {
  init: firestoreAction(({bindFirestoreRef}, usersRef) => {
    bindFirestoreRef('users', usersRef);
  }),
};
