import React from 'react';

export interface LanGrapesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrapesSolid: React.FC<LanGrapesSolidProps>;
export default LanGrapesSolid;
