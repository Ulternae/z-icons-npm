import React from 'react';

export interface LanTruckContainerEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerEmpty: React.FC<LanTruckContainerEmptyProps>;
export default LanTruckContainerEmpty;
