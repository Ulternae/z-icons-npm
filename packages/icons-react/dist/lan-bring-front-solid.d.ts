import React from 'react';

export interface LanBringFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringFrontSolid: React.FC<LanBringFrontSolidProps>;
export default LanBringFrontSolid;
