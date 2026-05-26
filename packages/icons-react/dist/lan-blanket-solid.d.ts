import React from 'react';

export interface LanBlanketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketSolid: React.FC<LanBlanketSolidProps>;
export default LanBlanketSolid;
