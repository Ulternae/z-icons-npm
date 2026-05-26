import React from 'react';

export interface LanCarSideBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideBoltSolid: React.FC<LanCarSideBoltSolidProps>;
export default LanCarSideBoltSolid;
