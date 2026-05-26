import React from 'react';

export interface LanBoneBreakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneBreakThin: React.FC<LanBoneBreakThinProps>;
export default LanBoneBreakThin;
