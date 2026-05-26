import React from 'react';

export interface LanHatWitchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWitchSolid: React.FC<LanHatWitchSolidProps>;
export default LanHatWitchSolid;
