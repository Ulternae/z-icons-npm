import React from 'react';

export interface LanCourtSportSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCourtSportSolid: React.FC<LanCourtSportSolidProps>;
export default LanCourtSportSolid;
