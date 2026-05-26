import React from 'react';

export interface LanMasksTheaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMasksTheaterThin: React.FC<LanMasksTheaterThinProps>;
export default LanMasksTheaterThin;
