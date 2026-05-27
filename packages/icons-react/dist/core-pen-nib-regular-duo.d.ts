import React from 'react';

export interface CorePenNibRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenNibRegularDuo: React.FC<CorePenNibRegularDuoProps>;
export default CorePenNibRegularDuo;
