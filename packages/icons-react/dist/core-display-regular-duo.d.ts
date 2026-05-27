import React from 'react';

export interface CoreDisplayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDisplayRegularDuo: React.FC<CoreDisplayRegularDuoProps>;
export default CoreDisplayRegularDuo;
