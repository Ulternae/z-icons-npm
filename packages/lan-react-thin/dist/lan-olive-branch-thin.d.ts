import React from 'react';

export interface LanOliveBranchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveBranchThin(props: LanOliveBranchThinProps): React.ReactElement;
export default LanOliveBranchThin;
