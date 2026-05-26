import React from 'react';

export interface LanRhombusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRhombusSolid: React.FC<LanRhombusSolidProps>;
export default LanRhombusSolid;
