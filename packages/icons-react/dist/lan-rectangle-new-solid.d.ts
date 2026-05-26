import React from 'react';

export interface LanRectangleNewSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNewSolid: React.FC<LanRectangleNewSolidProps>;
export default LanRectangleNewSolid;
