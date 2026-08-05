import React from 'react';

export interface LanOliveBranchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveBranch(props: LanOliveBranchProps): React.ReactElement;
export default LanOliveBranch;
