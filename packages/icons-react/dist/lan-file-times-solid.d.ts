import React from 'react';

export interface LanFileTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTimesSolid: React.FC<LanFileTimesSolidProps>;
export default LanFileTimesSolid;
