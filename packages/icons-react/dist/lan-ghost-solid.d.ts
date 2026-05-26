import React from 'react';

export interface LanGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGhostSolid: React.FC<LanGhostSolidProps>;
export default LanGhostSolid;
