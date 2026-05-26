import React from 'react';

export interface LanBoneBreakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneBreakSolid: React.FC<LanBoneBreakSolidProps>;
export default LanBoneBreakSolid;
