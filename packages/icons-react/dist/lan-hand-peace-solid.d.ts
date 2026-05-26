import React from 'react';

export interface LanHandPeaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPeaceSolid: React.FC<LanHandPeaceSolidProps>;
export default LanHandPeaceSolid;
