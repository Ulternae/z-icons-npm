import React from 'react';

export interface CoreFishRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFishRegularDuo: React.FC<CoreFishRegularDuoProps>;
export default CoreFishRegularDuo;
