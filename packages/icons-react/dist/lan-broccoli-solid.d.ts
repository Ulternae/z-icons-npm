import React from 'react';

export interface LanBroccoliSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroccoliSolid: React.FC<LanBroccoliSolidProps>;
export default LanBroccoliSolid;
