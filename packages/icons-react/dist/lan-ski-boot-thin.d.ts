import React from 'react';

export interface LanSkiBootThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootThin: React.FC<LanSkiBootThinProps>;
export default LanSkiBootThin;
