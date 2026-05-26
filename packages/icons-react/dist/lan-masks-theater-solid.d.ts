import React from 'react';

export interface LanMasksTheaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMasksTheaterSolid: React.FC<LanMasksTheaterSolidProps>;
export default LanMasksTheaterSolid;
