import React from 'react';

export interface LanTruckContainerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerThin: React.FC<LanTruckContainerThinProps>;
export default LanTruckContainerThin;
