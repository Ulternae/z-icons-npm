import React from 'react';

export interface LanTruckMovingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMovingThin(props: LanTruckMovingThinProps): React.ReactElement;
export default LanTruckMovingThin;
