import React from 'react';

export interface NeoGiftRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGiftRegularDuo: React.FC<NeoGiftRegularDuoProps>;
export default NeoGiftRegularDuo;
