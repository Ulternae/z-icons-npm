import React from 'react';

export interface LanBattery3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBattery3Thin: React.FC<LanBattery3ThinProps>;
export default LanBattery3Thin;
