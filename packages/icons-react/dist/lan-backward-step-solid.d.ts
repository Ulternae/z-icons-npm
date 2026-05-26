import React from 'react';

export interface LanBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardStepSolid: React.FC<LanBackwardStepSolidProps>;
export default LanBackwardStepSolid;
