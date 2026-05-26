import React from 'react';

export interface LanVenusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusSolid: React.FC<LanVenusSolidProps>;
export default LanVenusSolid;
