import React from 'react';

export interface LanPersonDollySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDollySolid: React.FC<LanPersonDollySolidProps>;
export default LanPersonDollySolid;
