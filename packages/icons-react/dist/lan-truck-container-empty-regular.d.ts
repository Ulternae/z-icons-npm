import React from 'react';

export interface LanTruckContainerEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerEmptyRegular: React.FC<LanTruckContainerEmptyRegularProps>;
export default LanTruckContainerEmptyRegular;
