import React from 'react';

export interface LanHeartCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleCheckSolid: React.FC<LanHeartCircleCheckSolidProps>;
export default LanHeartCircleCheckSolid;
