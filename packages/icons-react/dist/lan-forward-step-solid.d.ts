import React from 'react';

export interface LanForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardStepSolid: React.FC<LanForwardStepSolidProps>;
export default LanForwardStepSolid;
