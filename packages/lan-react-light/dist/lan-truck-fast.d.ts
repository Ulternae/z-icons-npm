import React from 'react';

export interface LanTruckFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFast(props: LanTruckFastProps): React.ReactElement;
export default LanTruckFast;
