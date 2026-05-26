import React from 'react';

export interface LanMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapSolid: React.FC<LanMapSolidProps>;
export default LanMapSolid;
