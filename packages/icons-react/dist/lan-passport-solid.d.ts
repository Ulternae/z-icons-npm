import React from 'react';

export interface LanPassportSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPassportSolid: React.FC<LanPassportSolidProps>;
export default LanPassportSolid;
