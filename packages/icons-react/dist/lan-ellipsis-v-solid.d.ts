import React from 'react';

export interface LanEllipsisVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisVSolid: React.FC<LanEllipsisVSolidProps>;
export default LanEllipsisVSolid;
