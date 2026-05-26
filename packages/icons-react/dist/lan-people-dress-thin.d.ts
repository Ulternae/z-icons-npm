import React from 'react';

export interface LanPeopleDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDressThin: React.FC<LanPeopleDressThinProps>;
export default LanPeopleDressThin;
