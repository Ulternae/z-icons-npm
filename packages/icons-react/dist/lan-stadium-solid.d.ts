import React from 'react';

export interface LanStadiumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStadiumSolid: React.FC<LanStadiumSolidProps>;
export default LanStadiumSolid;
