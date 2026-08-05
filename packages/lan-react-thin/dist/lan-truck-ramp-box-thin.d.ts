import React from 'react';

export interface LanTruckRampBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampBoxThin(props: LanTruckRampBoxThinProps): React.ReactElement;
export default LanTruckRampBoxThin;
