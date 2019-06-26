import Vue from 'vue'
import VueRouter from "vue-router";
import mainView from '../views/mainView.vue';
import mapView from '../views/mapView.vue';
import headerView from '../header/header';
import noticeView from '../notice/notice';

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes : [
        {
            path : '/', 
            name : 'main page',
            component : mainView
        },
        {
            path : '/view', 
            name : 'map page',
            components : {
                header : headerView,
                map : mapView
            },
            children : [
                {
                    path : 'notice',
                    component : noticeView
                }
            ]
            // component : () => import(/* webpackChunkName: "map" */ "../views/mapView.vue") 
        }
    ]
});