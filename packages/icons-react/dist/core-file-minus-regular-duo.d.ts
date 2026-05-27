import React from 'react';

export interface CoreFileMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileMinusRegularDuo: React.FC<CoreFileMinusRegularDuoProps>;
export default CoreFileMinusRegularDuo;
