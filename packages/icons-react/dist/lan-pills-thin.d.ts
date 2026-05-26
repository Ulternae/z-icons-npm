import React from 'react';

export interface LanPillsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPillsThin: React.FC<LanPillsThinProps>;
export default LanPillsThin;
