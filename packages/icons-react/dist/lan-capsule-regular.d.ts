import React from 'react';

export interface LanCapsuleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsuleRegular: React.FC<LanCapsuleRegularProps>;
export default LanCapsuleRegular;
