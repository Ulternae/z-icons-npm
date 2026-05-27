import React from 'react';

export interface CoreBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBackwardStepSolid: React.FC<CoreBackwardStepSolidProps>;
export default CoreBackwardStepSolid;
