import React from 'react';

export interface LanIciclesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIciclesSolid: React.FC<LanIciclesSolidProps>;
export default LanIciclesSolid;
