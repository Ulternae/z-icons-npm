import React from 'react';

export interface LanDropletDegreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletDegreeSolid: React.FC<LanDropletDegreeSolidProps>;
export default LanDropletDegreeSolid;
