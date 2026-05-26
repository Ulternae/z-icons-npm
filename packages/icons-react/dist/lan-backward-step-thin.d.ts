import React from 'react';

export interface LanBackwardStepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardStepThin: React.FC<LanBackwardStepThinProps>;
export default LanBackwardStepThin;
