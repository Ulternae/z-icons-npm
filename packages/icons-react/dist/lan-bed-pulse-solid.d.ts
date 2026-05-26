import React from 'react';

export interface LanBedPulseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedPulseSolid: React.FC<LanBedPulseSolidProps>;
export default LanBedPulseSolid;
