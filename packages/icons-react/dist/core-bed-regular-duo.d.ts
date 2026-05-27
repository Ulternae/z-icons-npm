import React from 'react';

export interface CoreBedRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBedRegularDuo: React.FC<CoreBedRegularDuoProps>;
export default CoreBedRegularDuo;
