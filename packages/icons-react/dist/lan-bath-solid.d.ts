import React from 'react';

export interface LanBathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBathSolid: React.FC<LanBathSolidProps>;
export default LanBathSolid;
