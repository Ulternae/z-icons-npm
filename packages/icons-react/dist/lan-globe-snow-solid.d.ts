import React from 'react';

export interface LanGlobeSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeSnowSolid: React.FC<LanGlobeSnowSolidProps>;
export default LanGlobeSnowSolid;
