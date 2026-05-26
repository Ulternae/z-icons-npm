import React from 'react';

export interface LanOliveBranchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveBranchSolid: React.FC<LanOliveBranchSolidProps>;
export default LanOliveBranchSolid;
