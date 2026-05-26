import React from 'react';

export interface LanDropletPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPlusSolid: React.FC<LanDropletPlusSolidProps>;
export default LanDropletPlusSolid;
