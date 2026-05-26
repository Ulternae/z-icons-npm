import React from 'react';

export interface LanDroneAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneAltRegular: React.FC<LanDroneAltRegularProps>;
export default LanDroneAltRegular;
