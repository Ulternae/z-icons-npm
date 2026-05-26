import React from 'react';

export interface LanBattery2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBattery2Thin: React.FC<LanBattery2ThinProps>;
export default LanBattery2Thin;
