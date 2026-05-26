import React from 'react';

export interface LanTruckContainerEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerEmptyThin: React.FC<LanTruckContainerEmptyThinProps>;
export default LanTruckContainerEmptyThin;
