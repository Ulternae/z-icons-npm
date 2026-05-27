import React from 'react';

export interface CoreHouseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHouseRegularDuo: React.FC<CoreHouseRegularDuoProps>;
export default CoreHouseRegularDuo;
