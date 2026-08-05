import React from 'react';

export interface LanCodeBranchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeBranch(props: LanCodeBranchProps): React.ReactElement;
export default LanCodeBranch;
