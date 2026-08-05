import React from 'react';

export interface LanTruckFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldThin(props: LanTruckFieldThinProps): React.ReactElement;
export default LanTruckFieldThin;
