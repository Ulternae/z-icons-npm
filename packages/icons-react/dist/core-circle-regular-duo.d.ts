import React from 'react';

export interface CoreCircleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleRegularDuo: React.FC<CoreCircleRegularDuoProps>;
export default CoreCircleRegularDuo;
