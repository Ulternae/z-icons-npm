import React from 'react';

export interface LanRightLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLeftThin: React.FC<LanRightLeftThinProps>;
export default LanRightLeftThin;
