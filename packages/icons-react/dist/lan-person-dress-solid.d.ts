import React from 'react';

export interface LanPersonDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressSolid: React.FC<LanPersonDressSolidProps>;
export default LanPersonDressSolid;
