import React from 'react';

export interface CoreBellRingRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellRingRegularDuo: React.FC<CoreBellRingRegularDuoProps>;
export default CoreBellRingRegularDuo;
