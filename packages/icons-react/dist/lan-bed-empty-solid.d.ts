import React from 'react';

export interface LanBedEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedEmptySolid: React.FC<LanBedEmptySolidProps>;
export default LanBedEmptySolid;
