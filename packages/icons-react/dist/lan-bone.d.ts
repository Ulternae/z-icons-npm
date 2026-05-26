import React from 'react';

export interface LanBoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBone: React.FC<LanBoneProps>;
export default LanBone;
