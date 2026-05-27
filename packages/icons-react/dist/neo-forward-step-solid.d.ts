import React from 'react';

export interface NeoForwardStepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoForwardStepSolid: React.FC<NeoForwardStepSolidProps>;
export default NeoForwardStepSolid;
