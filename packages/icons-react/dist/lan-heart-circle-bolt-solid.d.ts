import React from 'react';

export interface LanHeartCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleBoltSolid: React.FC<LanHeartCircleBoltSolidProps>;
export default LanHeartCircleBoltSolid;
