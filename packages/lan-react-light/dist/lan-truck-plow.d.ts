import React from 'react';

export interface LanTruckPlowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlow(props: LanTruckPlowProps): React.ReactElement;
export default LanTruckPlow;
