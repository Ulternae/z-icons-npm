import React from 'react';

export interface LanBedAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedAltRegular: React.FC<LanBedAltRegularProps>;
export default LanBedAltRegular;
