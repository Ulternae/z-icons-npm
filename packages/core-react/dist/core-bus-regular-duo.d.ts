import React from 'react';

export interface CoreBusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBusRegularDuo(props: CoreBusRegularDuoProps): React.ReactElement;
export default CoreBusRegularDuo;
