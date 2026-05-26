import React from 'react';

export interface LanMarsAndVenusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsAndVenusSolid: React.FC<LanMarsAndVenusSolidProps>;
export default LanMarsAndVenusSolid;
