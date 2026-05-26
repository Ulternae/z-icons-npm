import React from 'react';

export interface LanHardHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardHat: React.FC<LanHardHatProps>;
export default LanHardHat;
