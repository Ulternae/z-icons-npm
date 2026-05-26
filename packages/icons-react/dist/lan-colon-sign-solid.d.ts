import React from 'react';

export interface LanColonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonSignSolid: React.FC<LanColonSignSolidProps>;
export default LanColonSignSolid;
