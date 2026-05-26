import React from 'react';

export interface LanTruckContainerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainer: React.FC<LanTruckContainerProps>;
export default LanTruckContainer;
