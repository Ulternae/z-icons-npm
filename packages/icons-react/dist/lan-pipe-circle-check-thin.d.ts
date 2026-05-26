import React from 'react';

export interface LanPipeCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCircleCheckThin: React.FC<LanPipeCircleCheckThinProps>;
export default LanPipeCircleCheckThin;
