import React from 'react';

export interface CoreKeyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKeyRegularDuo: React.FC<CoreKeyRegularDuoProps>;
export default CoreKeyRegularDuo;
