import React from 'react';

export interface LanDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDressThin: React.FC<LanDressThinProps>;
export default LanDressThin;
