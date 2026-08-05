import React from 'react';

export interface LanCodeBranchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeBranchThin(props: LanCodeBranchThinProps): React.ReactElement;
export default LanCodeBranchThin;
