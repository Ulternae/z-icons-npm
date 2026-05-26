import React from 'react';

export interface LanMeteorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeteorSolid: React.FC<LanMeteorSolidProps>;
export default LanMeteorSolid;
