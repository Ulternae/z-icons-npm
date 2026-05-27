import React from 'react';

export interface CoreTriangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTriangleRegularDuo: React.FC<CoreTriangleRegularDuoProps>;
export default CoreTriangleRegularDuo;
