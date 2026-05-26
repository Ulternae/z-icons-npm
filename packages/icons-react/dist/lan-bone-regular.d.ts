import React from 'react';

export interface LanBoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneRegular: React.FC<LanBoneRegularProps>;
export default LanBoneRegular;
