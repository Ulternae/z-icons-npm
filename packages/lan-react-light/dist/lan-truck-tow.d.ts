import React from 'react';

export interface LanTruckTowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckTow(props: LanTruckTowProps): React.ReactElement;
export default LanTruckTow;
