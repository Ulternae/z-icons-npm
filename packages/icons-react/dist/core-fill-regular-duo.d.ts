import React from 'react';

export interface CoreFillRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFillRegularDuo: React.FC<CoreFillRegularDuoProps>;
export default CoreFillRegularDuo;
