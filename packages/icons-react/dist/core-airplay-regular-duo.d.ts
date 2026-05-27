import React from 'react';

export interface CoreAirplayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAirplayRegularDuo: React.FC<CoreAirplayRegularDuoProps>;
export default CoreAirplayRegularDuo;
