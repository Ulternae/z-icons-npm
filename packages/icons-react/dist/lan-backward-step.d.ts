import React from 'react';

export interface LanBackwardStepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardStep: React.FC<LanBackwardStepProps>;
export default LanBackwardStep;
