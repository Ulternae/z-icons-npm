import React from 'react';

export interface CorePoopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePoopRegularDuo: React.FC<CorePoopRegularDuoProps>;
export default CorePoopRegularDuo;
