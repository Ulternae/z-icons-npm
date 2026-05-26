import React from 'react';

export interface LanBedBunkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedBunkSolid: React.FC<LanBedBunkSolidProps>;
export default LanBedBunkSolid;
