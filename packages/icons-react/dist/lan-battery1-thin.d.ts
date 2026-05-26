import React from 'react';

export interface LanBattery1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBattery1Thin: React.FC<LanBattery1ThinProps>;
export default LanBattery1Thin;
