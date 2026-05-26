import React from 'react';

export interface LanBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedSolid: React.FC<LanBedSolidProps>;
export default LanBedSolid;
