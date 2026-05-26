import React from 'react';

export interface LanCaravanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanThin: React.FC<LanCaravanThinProps>;
export default LanCaravanThin;
