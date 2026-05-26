import React from 'react';

export interface LanEllipsisHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisHSolid: React.FC<LanEllipsisHSolidProps>;
export default LanEllipsisHSolid;
