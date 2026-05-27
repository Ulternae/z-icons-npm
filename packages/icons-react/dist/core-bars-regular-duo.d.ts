import React from 'react';

export interface CoreBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBarsRegularDuo: React.FC<CoreBarsRegularDuoProps>;
export default CoreBarsRegularDuo;
