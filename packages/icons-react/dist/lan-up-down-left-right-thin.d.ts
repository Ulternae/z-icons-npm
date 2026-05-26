import React from 'react';

export interface LanUpDownLeftRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpDownLeftRightThin: React.FC<LanUpDownLeftRightThinProps>;
export default LanUpDownLeftRightThin;
