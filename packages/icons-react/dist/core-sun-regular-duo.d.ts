import React from 'react';

export interface CoreSunRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSunRegularDuo: React.FC<CoreSunRegularDuoProps>;
export default CoreSunRegularDuo;
