import React from 'react';

export interface LanMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMask: React.FC<LanMaskProps>;
export default LanMask;
