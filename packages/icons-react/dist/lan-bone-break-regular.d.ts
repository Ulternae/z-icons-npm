import React from 'react';

export interface LanBoneBreakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneBreakRegular: React.FC<LanBoneBreakRegularProps>;
export default LanBoneBreakRegular;
