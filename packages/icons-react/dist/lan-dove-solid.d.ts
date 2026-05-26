import React from 'react';

export interface LanDoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoveSolid: React.FC<LanDoveSolidProps>;
export default LanDoveSolid;
