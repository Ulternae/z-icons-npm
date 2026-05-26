import React from 'react';

export interface LanBedEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedEmptyRegular: React.FC<LanBedEmptyRegularProps>;
export default LanBedEmptyRegular;
