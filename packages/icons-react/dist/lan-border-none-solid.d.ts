import React from 'react';

export interface LanBorderNoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderNoneSolid: React.FC<LanBorderNoneSolidProps>;
export default LanBorderNoneSolid;
