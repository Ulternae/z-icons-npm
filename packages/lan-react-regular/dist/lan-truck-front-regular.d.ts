import React from 'react';

export interface LanTruckFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFrontRegular(props: LanTruckFrontRegularProps): React.ReactElement;
export default LanTruckFrontRegular;
