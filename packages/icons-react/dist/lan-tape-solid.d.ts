import React from 'react';

export interface LanTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTapeSolid: React.FC<LanTapeSolidProps>;
export default LanTapeSolid;
