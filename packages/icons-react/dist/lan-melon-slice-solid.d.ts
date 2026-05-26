import React from 'react';

export interface LanMelonSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonSliceSolid: React.FC<LanMelonSliceSolidProps>;
export default LanMelonSliceSolid;
