import React from 'react';

export interface LanHorseHeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseHeadSolid: React.FC<LanHorseHeadSolidProps>;
export default LanHorseHeadSolid;
