import React from 'react';

export interface LanSkiBootSkiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootSkiSolid: React.FC<LanSkiBootSkiSolidProps>;
export default LanSkiBootSkiSolid;
