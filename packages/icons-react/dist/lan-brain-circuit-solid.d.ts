import React from 'react';

export interface LanBrainCircuitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainCircuitSolid: React.FC<LanBrainCircuitSolidProps>;
export default LanBrainCircuitSolid;
