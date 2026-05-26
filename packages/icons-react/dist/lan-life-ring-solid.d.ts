import React from 'react';

export interface LanLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLifeRingSolid: React.FC<LanLifeRingSolidProps>;
export default LanLifeRingSolid;
