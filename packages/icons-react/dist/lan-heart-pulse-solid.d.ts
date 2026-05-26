import React from 'react';

export interface LanHeartPulseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartPulseSolid: React.FC<LanHeartPulseSolidProps>;
export default LanHeartPulseSolid;
