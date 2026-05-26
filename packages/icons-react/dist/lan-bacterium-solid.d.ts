import React from 'react';

export interface LanBacteriumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteriumSolid: React.FC<LanBacteriumSolidProps>;
export default LanBacteriumSolid;
