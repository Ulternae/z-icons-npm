import React from 'react';

export interface LanBrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainSolid: React.FC<LanBrainSolidProps>;
export default LanBrainSolid;
