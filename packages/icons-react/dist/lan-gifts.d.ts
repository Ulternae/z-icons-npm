import React from 'react';

export interface LanGiftsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGifts: React.FC<LanGiftsProps>;
export default LanGifts;
