import React from 'react';

export interface NeoBatteryHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryHalfSolid: React.FC<NeoBatteryHalfSolidProps>;
export default NeoBatteryHalfSolid;
