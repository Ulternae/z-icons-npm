import React from 'react';

export interface CorePlayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlayRegularDuo: React.FC<CorePlayRegularDuoProps>;
export default CorePlayRegularDuo;
