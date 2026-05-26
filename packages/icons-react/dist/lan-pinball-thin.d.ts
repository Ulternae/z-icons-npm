import React from 'react';

export interface LanPinballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinballThin: React.FC<LanPinballThinProps>;
export default LanPinballThin;
