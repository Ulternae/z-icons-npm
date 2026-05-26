import React from 'react';

export interface LanUpRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpRightThin: React.FC<LanUpRightThinProps>;
export default LanUpRightThin;
