import React from 'react';

export interface NeoSlidersRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSlidersRegularDuo: React.FC<NeoSlidersRegularDuoProps>;
export default NeoSlidersRegularDuo;
