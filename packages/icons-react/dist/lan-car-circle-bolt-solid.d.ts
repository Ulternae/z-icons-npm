import React from 'react';

export interface LanCarCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarCircleBoltSolid: React.FC<LanCarCircleBoltSolidProps>;
export default LanCarCircleBoltSolid;
