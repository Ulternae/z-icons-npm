import React from 'react';

export interface LanTruckFieldUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldUnRegular(props: LanTruckFieldUnRegularProps): React.ReactElement;
export default LanTruckFieldUnRegular;
