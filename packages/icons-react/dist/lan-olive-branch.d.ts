import React from 'react';

export interface LanOliveBranchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveBranch: React.FC<LanOliveBranchProps>;
export default LanOliveBranch;
