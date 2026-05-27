import React from 'react';

export interface CoreSlidersRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSlidersRegularDuo: React.FC<CoreSlidersRegularDuoProps>;
export default CoreSlidersRegularDuo;
