import React from 'react';

export interface LanMelonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonSolid: React.FC<LanMelonSolidProps>;
export default LanMelonSolid;
