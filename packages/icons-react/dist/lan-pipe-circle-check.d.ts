import React from 'react';

export interface LanPipeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCircleCheck: React.FC<LanPipeCircleCheckProps>;
export default LanPipeCircleCheck;
