import React from 'react';

export interface LanBedBunkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedBunk: React.FC<LanBedBunkProps>;
export default LanBedBunk;
