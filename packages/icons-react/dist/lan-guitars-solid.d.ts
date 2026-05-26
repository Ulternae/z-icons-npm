import React from 'react';

export interface LanGuitarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarsSolid: React.FC<LanGuitarsSolidProps>;
export default LanGuitarsSolid;
