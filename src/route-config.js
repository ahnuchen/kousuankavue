import BookList from './views/BookList.vue';
export default [
  {
    path: '/', component: BookList,
  },
  {
    path: '/exercise/:bookIndex',
    // component: r => require.ensure([], () => r(require('./views/ExerciseList.vue')), 'ExerciseList'),
    component:function(r){
      return require.ensure([],function () {
        return r(require('./views/ExerciseList.vue'))
      },'ExerciseList')
    },
    props: true
  }, {
    path: '/exercise/:bookIndex/prepare/:chapIndex',
    component: r => require.ensure([], () => r(require('./views/PrePare.vue')), 'PrePare'),
    props: true,
  }, {
    path: '/exercise/:bookIndex/workcard/:chapIndex',
    component: r => require.ensure([], () => r(require('./views/WorkCard')), 'WorkCard'),
    props: true,

  }, {
    path: '/exercise/:bookIndex/result/:chapIndex',
    component: r => require.ensure([], () => r(require('./views/Result.vue')), 'Result'),
    props: true,

  }, {
    path: '/exercise/:bookIndex/allwrongview/:chapIndex',
    component: r => require.ensure([], () => r(require('./views/AllWrongView.vue')), 'AllWrongView'),
    props: true,
  }
]
