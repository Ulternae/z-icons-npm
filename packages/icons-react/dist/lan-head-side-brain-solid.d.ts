import React from 'react';

export interface LanHeadSideBrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideBrainSolid: React.FC<LanHeadSideBrainSolidProps>;
export default LanHeadSideBrainSolid;
