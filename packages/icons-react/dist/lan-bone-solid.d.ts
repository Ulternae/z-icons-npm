import React from 'react';

export interface LanBoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoneSolid: React.FC<LanBoneSolidProps>;
export default LanBoneSolid;
