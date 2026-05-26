import React from 'react';

export interface LanFlorinSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlorinSignSolid: React.FC<LanFlorinSignSolidProps>;
export default LanFlorinSignSolid;
