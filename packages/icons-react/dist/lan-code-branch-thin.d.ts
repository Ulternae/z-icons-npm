import React from 'react';

export interface LanCodeBranchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeBranchThin: React.FC<LanCodeBranchThinProps>;
export default LanCodeBranchThin;
