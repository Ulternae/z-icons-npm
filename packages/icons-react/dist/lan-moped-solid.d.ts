import React from 'react';

export interface LanMopedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMopedSolid: React.FC<LanMopedSolidProps>;
export default LanMopedSolid;
