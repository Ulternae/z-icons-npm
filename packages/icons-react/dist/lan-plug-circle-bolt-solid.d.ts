import React from 'react';

export interface LanPlugCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleBoltSolid: React.FC<LanPlugCircleBoltSolidProps>;
export default LanPlugCircleBoltSolid;
