import React from 'react';

export interface LanBlanketFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketFireSolid: React.FC<LanBlanketFireSolidProps>;
export default LanBlanketFireSolid;
