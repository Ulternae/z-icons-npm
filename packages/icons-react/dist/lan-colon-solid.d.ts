import React from 'react';

export interface LanColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonSolid: React.FC<LanColonSolidProps>;
export default LanColonSolid;
