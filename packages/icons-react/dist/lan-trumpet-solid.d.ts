import React from 'react';

export interface LanTrumpetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrumpetSolid: React.FC<LanTrumpetSolidProps>;
export default LanTrumpetSolid;
