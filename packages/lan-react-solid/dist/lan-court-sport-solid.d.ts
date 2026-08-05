import React from 'react';

export interface LanCourtSportSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCourtSportSolid(props: LanCourtSportSolidProps): React.ReactElement;
export default LanCourtSportSolid;
