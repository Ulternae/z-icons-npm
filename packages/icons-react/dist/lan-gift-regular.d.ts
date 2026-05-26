import React from 'react';

export interface LanGiftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftRegular: React.FC<LanGiftRegularProps>;
export default LanGiftRegular;
