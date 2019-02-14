import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyComponent from '@/components/MyComponent';
//import MyComponent from '@/components/pages/MyComponent';


Vue.use(Router);

export default new Router({
  mode: 'history',  // 이 history 모드가 설정되지 않으면 하나의 페이지(정적 페이지)만 렌더링된다.
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mycomponent',
      name: 'MyComponent',
      component: MyComponent
    },
  ],
});
