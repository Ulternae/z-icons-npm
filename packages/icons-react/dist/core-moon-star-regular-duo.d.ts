import React from 'react';

export interface CoreMoonStarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoonStarRegularDuo: React.FC<CoreMoonStarRegularDuoProps>;
export default CoreMoonStarRegularDuo;
