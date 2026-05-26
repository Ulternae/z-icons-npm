import React from 'react';

export interface LanSkiBootSkiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootSkiThin: React.FC<LanSkiBootSkiThinProps>;
export default LanSkiBootSkiThin;
