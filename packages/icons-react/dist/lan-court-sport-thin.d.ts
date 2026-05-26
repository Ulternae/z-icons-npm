import React from 'react';

export interface LanCourtSportThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCourtSportThin: React.FC<LanCourtSportThinProps>;
export default LanCourtSportThin;
