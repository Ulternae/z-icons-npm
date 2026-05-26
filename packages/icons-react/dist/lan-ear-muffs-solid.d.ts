import React from 'react';

export interface LanEarMuffsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarMuffsSolid: React.FC<LanEarMuffsSolidProps>;
export default LanEarMuffsSolid;
