import React from 'react';

export interface LanBoneBreakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneBreak: React.FC<LanBoneBreakProps>;
export default LanBoneBreak;
