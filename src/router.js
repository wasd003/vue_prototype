import Vue from 'vue'
import Router from 'vue-router'
import Neo4j from "@/pages/Neo4j";
import Hadoop from "@/pages/Hadoop";
import MySQL from "@/pages/MySQL";
import DimMySQL from "@/pages/DimMySQL";
import RDBMS from "@/pages/RDBMS";
import Home from "@/pages/Home";

Vue.use(Router);//加载Router插件

/**
 *
 * path编写规则：
 * 只有'/'的children带/，其余的都不带/
 *
 */

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/neo4j',
            children: [
                {
                    /**
                     * ‘/’的children带/
                     */
                    path: '/neo4j',
                    name: 'neo4j',
                    component: Neo4j,
                },
                {
                    path: '/hadoop',
                    name: 'hadoop',
                    component: Hadoop
                }
                ,
                {
                    path: '/rdbms',
                    name: 'rdbms',
                    component: RDBMS,
                    children: [
                        /**
                         * 非'/'的children不带/
                         */
                        {
                            path:'nondim',
                            name:'nondim',
                            component:MySQL,
                        },
                        {
                            path:'dim',
                            name:'dim',
                            component:DimMySQL,
                        }
                    ]
                }
            ]
        }
    ]
});
