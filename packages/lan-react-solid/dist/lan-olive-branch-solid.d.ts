import React from 'react';

export interface LanOliveBranchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveBranchSolid(props: LanOliveBranchSolidProps): React.ReactElement;
export default LanOliveBranchSolid;
