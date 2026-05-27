import React from 'react';

export interface CoreBoltRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoltRegularDuo: React.FC<CoreBoltRegularDuoProps>;
export default CoreBoltRegularDuo;
