import React from 'react';

export interface LanRacquetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRacquetSolid: React.FC<LanRacquetSolidProps>;
export default LanRacquetSolid;
