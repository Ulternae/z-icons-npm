import React from 'react';

export interface LanBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeSolid: React.FC<LanBadgeSolidProps>;
export default LanBadgeSolid;
