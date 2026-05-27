import React from 'react';

export interface NeoBackwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBackwardStepSolid: React.FC<NeoBackwardStepSolidProps>;
export default NeoBackwardStepSolid;
