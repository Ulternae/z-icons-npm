import React from 'react';

export interface LanHouseCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCircleCheckThin(props: LanHouseCircleCheckThinProps): React.ReactElement;
export default LanHouseCircleCheckThin;
