import React from 'react';

export interface LanCodeBranchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeBranchSolid(props: LanCodeBranchSolidProps): React.ReactElement;
export default LanCodeBranchSolid;
