import React from 'react';

export interface LanCourtSportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCourtSport: React.FC<LanCourtSportProps>;
export default LanCourtSport;
