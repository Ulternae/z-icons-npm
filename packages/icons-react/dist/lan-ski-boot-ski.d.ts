import React from 'react';

export interface LanSkiBootSkiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootSki: React.FC<LanSkiBootSkiProps>;
export default LanSkiBootSki;
