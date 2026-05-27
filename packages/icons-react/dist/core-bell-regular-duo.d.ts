import React from 'react';

export interface CoreBellRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellRegularDuo: React.FC<CoreBellRegularDuoProps>;
export default CoreBellRegularDuo;
