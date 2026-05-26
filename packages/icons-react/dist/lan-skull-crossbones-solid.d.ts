import React from 'react';

export interface LanSkullCrossbonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCrossbonesSolid: React.FC<LanSkullCrossbonesSolidProps>;
export default LanSkullCrossbonesSolid;
