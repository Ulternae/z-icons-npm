import React from 'react';

export interface LanSnowplowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowplowSolid: React.FC<LanSnowplowSolidProps>;
export default LanSnowplowSolid;
