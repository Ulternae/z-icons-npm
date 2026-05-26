import React from 'react';

export interface LanPancakesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPancakesThin: React.FC<LanPancakesThinProps>;
export default LanPancakesThin;
