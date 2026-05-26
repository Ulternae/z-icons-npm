import React from 'react';

export interface LanAnchorCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorCircleCheckSolid: React.FC<LanAnchorCircleCheckSolidProps>;
export default LanAnchorCircleCheckSolid;
