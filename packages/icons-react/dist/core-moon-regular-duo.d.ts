import React from 'react';

export interface CoreMoonRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoonRegularDuo: React.FC<CoreMoonRegularDuoProps>;
export default CoreMoonRegularDuo;
