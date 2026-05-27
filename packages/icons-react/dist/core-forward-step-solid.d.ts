import React from 'react';

export interface CoreForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreForwardStepSolid: React.FC<CoreForwardStepSolidProps>;
export default CoreForwardStepSolid;
