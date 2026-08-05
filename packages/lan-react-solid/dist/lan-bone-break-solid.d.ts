import React from 'react';

export interface LanBoneBreakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneBreakSolid(props: LanBoneBreakSolidProps): React.ReactElement;
export default LanBoneBreakSolid;
