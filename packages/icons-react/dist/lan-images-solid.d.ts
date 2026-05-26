import React from 'react';

export interface LanImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesSolid: React.FC<LanImagesSolidProps>;
export default LanImagesSolid;
