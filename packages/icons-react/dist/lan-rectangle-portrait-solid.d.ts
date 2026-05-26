import React from 'react';

export interface LanRectanglePortraitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePortraitSolid: React.FC<LanRectanglePortraitSolidProps>;
export default LanRectanglePortraitSolid;
