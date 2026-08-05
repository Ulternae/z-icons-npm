import React from 'react';

export interface LanTruckFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFire(props: LanTruckFireProps): React.ReactElement;
export default LanTruckFire;
