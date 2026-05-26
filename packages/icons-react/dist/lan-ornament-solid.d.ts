import React from 'react';

export interface LanOrnamentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOrnamentSolid: React.FC<LanOrnamentSolidProps>;
export default LanOrnamentSolid;
