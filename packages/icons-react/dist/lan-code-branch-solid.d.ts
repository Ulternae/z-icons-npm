import React from 'react';

export interface LanCodeBranchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeBranchSolid: React.FC<LanCodeBranchSolidProps>;
export default LanCodeBranchSolid;
