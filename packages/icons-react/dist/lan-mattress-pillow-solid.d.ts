import React from 'react';

export interface LanMattressPillowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMattressPillowSolid: React.FC<LanMattressPillowSolidProps>;
export default LanMattressPillowSolid;
