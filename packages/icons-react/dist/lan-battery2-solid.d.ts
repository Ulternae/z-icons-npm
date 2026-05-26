import React from 'react';

export interface LanBattery2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBattery2Solid: React.FC<LanBattery2SolidProps>;
export default LanBattery2Solid;
