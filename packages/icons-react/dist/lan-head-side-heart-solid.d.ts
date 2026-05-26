import React from 'react';

export interface LanHeadSideHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideHeartSolid: React.FC<LanHeadSideHeartSolidProps>;
export default LanHeadSideHeartSolid;
