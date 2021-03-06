import HomeComponent      from "./components/HomeComponent";
import ProductsComponent  from "./components/ProductsComponent";
import TaskComponent      from "./components/TaskComponent";
import Erro404Component   from "./components/Erro404Component";

export default [
  {path: '/',         component:HomeComponent},
  {path: '/produtos', component:ProductsComponent, name: 'products'},
  {path: '/tarefa/:id',  component:TaskComponent, name: 'task', props:true},
  {path: '/redirect', redirect: '/produtos'},
  {path: '*', component: Erro404Component},
]
