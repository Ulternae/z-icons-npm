import React from 'react';

export interface LanMicrowaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrowaveSolid: React.FC<LanMicrowaveSolidProps>;
export default LanMicrowaveSolid;
