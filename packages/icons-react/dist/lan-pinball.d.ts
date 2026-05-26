import React from 'react';

export interface LanPinballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinball: React.FC<LanPinballProps>;
export default LanPinball;
