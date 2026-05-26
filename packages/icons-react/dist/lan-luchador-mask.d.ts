import React from 'react';

export interface LanLuchadorMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLuchadorMask: React.FC<LanLuchadorMaskProps>;
export default LanLuchadorMask;
