import React from 'react';

export interface LanRingsWeddingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingsWeddingSolid: React.FC<LanRingsWeddingSolidProps>;
export default LanRingsWeddingSolid;
