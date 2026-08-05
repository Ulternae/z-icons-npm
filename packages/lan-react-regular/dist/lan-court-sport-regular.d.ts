import React from 'react';

export interface LanCourtSportRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCourtSportRegular(props: LanCourtSportRegularProps): React.ReactElement;
export default LanCourtSportRegular;
