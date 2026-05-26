import React from 'react';

export interface LanRssThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssThin: React.FC<LanRssThinProps>;
export default LanRssThin;
