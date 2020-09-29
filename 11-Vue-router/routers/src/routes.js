import HomeComponent      from "./components/HomeComponent";
import ProductsComponent  from "./components/ProductsComponent";
import TaskComponent      from "./components/TaskComponent";

export default [
  {path: '/',         component:HomeComponent},
  {path: '/produtos', component:ProductsComponent, name: 'products'},
  {path: '/tarefas',  component:TaskComponent},
]
