import React from 'react';

export interface CoreTagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTagRegularDuo: React.FC<CoreTagRegularDuoProps>;
export default CoreTagRegularDuo;
