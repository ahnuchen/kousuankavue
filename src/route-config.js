import BookList from './views/BookList.vue';
import ExerciseList from './views/ExerciseList.vue';
import PrePare from './views/PrePare.vue';
import WorkCard from './views/WorkCard';
import Result from './views/Result.vue';
import AllWrongView from './views/AllWrongView.vue';


export default [
  {
    path: '/', component: BookList,
  },
  {
    path: '/exercise/:bookIndex',
    component: ExerciseList,
    props: true
  }, {
    path: '/exercise/:bookIndex/prepare/:chapIndex',
    component: PrePare,
    props: true,
  }, {
    path: '/exercise/:bookIndex/workcard/:chapIndex',
    component: WorkCard,
    props: true,

  }, {
    path: '/exercise/:bookIndex/result/:chapIndex',
    component: Result,
    props: true,

  }, {
    path: '/exercise/:bookIndex/allwrongview/:chapIndex',
    component: AllWrongView,
    props: true,
  }
]
