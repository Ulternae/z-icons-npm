import React from 'react';

export interface CoreImageRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImageRegularDuo: React.FC<CoreImageRegularDuoProps>;
export default CoreImageRegularDuo;
