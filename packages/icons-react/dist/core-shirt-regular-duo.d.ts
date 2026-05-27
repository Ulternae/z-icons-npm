import React from 'react';

export interface CoreShirtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShirtRegularDuo: React.FC<CoreShirtRegularDuoProps>;
export default CoreShirtRegularDuo;
