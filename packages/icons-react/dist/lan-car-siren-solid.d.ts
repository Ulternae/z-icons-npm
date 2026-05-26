import React from 'react';

export interface LanCarSirenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenSolid: React.FC<LanCarSirenSolidProps>;
export default LanCarSirenSolid;
