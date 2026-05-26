import React from 'react';

export interface LanGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGhost: React.FC<LanGhostProps>;
export default LanGhost;
