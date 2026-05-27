import React from 'react';

export interface CoreStarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStarRegularDuo: React.FC<CoreStarRegularDuoProps>;
export default CoreStarRegularDuo;
