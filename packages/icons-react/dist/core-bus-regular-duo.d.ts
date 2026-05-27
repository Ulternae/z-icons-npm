import React from 'react';

export interface CoreBusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBusRegularDuo: React.FC<CoreBusRegularDuoProps>;
export default CoreBusRegularDuo;
