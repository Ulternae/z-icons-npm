import React from 'react';

export interface CoreGiftRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGiftRegularDuo: React.FC<CoreGiftRegularDuoProps>;
export default CoreGiftRegularDuo;
