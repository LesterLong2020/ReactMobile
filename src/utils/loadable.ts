import RouteLoadable from 'react-loadable';
import { Loading } from '@/components';

export default (loader: () => any) => {
  return RouteLoadable({
    loading: Loading,
    loader
  })
}

