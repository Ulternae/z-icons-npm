import React from 'react';

export interface LanCourtSportThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCourtSportThin(props: LanCourtSportThinProps): React.ReactElement;
export default LanCourtSportThin;
