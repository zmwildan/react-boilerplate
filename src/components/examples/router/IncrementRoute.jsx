import React from 'react';
import RouteContent from './RouteContent';

import { increment } from '../../../redux/actions/action-creators';

const IncrementRoute = () => <RouteContent icon="plus" label="Increment" action={increment} />;

export default IncrementRoute;
