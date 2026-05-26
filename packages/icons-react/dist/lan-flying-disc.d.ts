import React from 'react';

export interface LanFlyingDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlyingDisc: React.FC<LanFlyingDiscProps>;
export default LanFlyingDisc;
