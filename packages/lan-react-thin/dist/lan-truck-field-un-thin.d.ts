import React from 'react';

export interface LanTruckFieldUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldUnThin(props: LanTruckFieldUnThinProps): React.ReactElement;
export default LanTruckFieldUnThin;
