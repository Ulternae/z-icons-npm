import React from 'react';

export interface LanTruckFieldUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldUn(props: LanTruckFieldUnProps): React.ReactElement;
export default LanTruckFieldUn;
