import React from 'react';

export interface LanBirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBirdSolid: React.FC<LanBirdSolidProps>;
export default LanBirdSolid;
