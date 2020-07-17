import Loadable from '@/utils/loadable';

export default [{
  // 首页
  path: '/index',
  component: Loadable(() => import('src/pages/Index/Index'))
}, {
  path: '/user',
  component: Loadable(() => import('src/pages/User/Index'))
}, {
  path: '/set',
  component: Loadable(() => import('src/pages/Set/Index'))
}]
