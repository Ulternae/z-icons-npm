import React from 'react';

export interface LanCourtSportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCourtSport(props: LanCourtSportProps): React.ReactElement;
export default LanCourtSport;
