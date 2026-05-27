import React from 'react';

export interface CoreFlowerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlowerRegularDuo: React.FC<CoreFlowerRegularDuoProps>;
export default CoreFlowerRegularDuo;
