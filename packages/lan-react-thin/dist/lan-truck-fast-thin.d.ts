import React from 'react';

export interface LanTruckFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFastThin(props: LanTruckFastThinProps): React.ReactElement;
export default LanTruckFastThin;
