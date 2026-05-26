import React from 'react';

export interface LanSkiBootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootSolid: React.FC<LanSkiBootSolidProps>;
export default LanSkiBootSolid;
