import React from 'react';

export interface LanHatWitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWitch: React.FC<LanHatWitchProps>;
export default LanHatWitch;
