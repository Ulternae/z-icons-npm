import React from 'react';

export interface CoreGearRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGearRegularDuo: React.FC<CoreGearRegularDuoProps>;
export default CoreGearRegularDuo;
