import React from 'react';

export interface LanPeoplePantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePantsThin: React.FC<LanPeoplePantsThinProps>;
export default LanPeoplePantsThin;
