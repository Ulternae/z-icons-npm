import React from 'react';

export interface LanVideoPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoPlusSolid: React.FC<LanVideoPlusSolidProps>;
export default LanVideoPlusSolid;
