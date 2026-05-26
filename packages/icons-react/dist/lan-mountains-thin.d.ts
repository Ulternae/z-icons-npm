import React from 'react';

export interface LanMountainsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainsThin: React.FC<LanMountainsThinProps>;
export default LanMountainsThin;
