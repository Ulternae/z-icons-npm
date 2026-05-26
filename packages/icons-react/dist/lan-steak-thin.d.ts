import React from 'react';

export interface LanSteakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteakThin: React.FC<LanSteakThinProps>;
export default LanSteakThin;
