import React from 'react';

export interface LanBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBSolid: React.FC<LanBSolidProps>;
export default LanBSolid;
