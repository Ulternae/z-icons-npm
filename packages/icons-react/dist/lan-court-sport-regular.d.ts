import React from 'react';

export interface LanCourtSportRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCourtSportRegular: React.FC<LanCourtSportRegularProps>;
export default LanCourtSportRegular;
