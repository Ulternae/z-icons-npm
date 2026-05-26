import React from 'react';

export interface LanHatWitchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWitchThin: React.FC<LanHatWitchThinProps>;
export default LanHatWitchThin;
