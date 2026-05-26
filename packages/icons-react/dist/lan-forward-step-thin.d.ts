import React from 'react';

export interface LanForwardStepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardStepThin: React.FC<LanForwardStepThinProps>;
export default LanForwardStepThin;
