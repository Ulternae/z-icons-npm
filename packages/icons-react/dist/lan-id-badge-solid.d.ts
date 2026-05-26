import React from 'react';

export interface LanIdBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdBadgeSolid: React.FC<LanIdBadgeSolidProps>;
export default LanIdBadgeSolid;
