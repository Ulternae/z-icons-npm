import React from 'react';

export interface LanWatermelonSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatermelonSliceSolid: React.FC<LanWatermelonSliceSolidProps>;
export default LanWatermelonSliceSolid;
