import React from 'react';

export interface LanHourglassEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassEmptyThin: React.FC<LanHourglassEmptyThinProps>;
export default LanHourglassEmptyThin;
