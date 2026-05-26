import React from 'react';

export interface LanTruckContainerEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerEmptySolid: React.FC<LanTruckContainerEmptySolidProps>;
export default LanTruckContainerEmptySolid;
