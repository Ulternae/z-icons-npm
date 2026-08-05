import React from 'react';

export interface LanTruckRampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampThin(props: LanTruckRampThinProps): React.ReactElement;
export default LanTruckRampThin;
