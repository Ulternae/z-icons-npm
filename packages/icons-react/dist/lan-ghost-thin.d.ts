import React from 'react';

export interface LanGhostThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGhostThin: React.FC<LanGhostThinProps>;
export default LanGhostThin;
