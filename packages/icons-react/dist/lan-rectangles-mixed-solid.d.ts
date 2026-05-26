import React from 'react';

export interface LanRectanglesMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglesMixedSolid: React.FC<LanRectanglesMixedSolidProps>;
export default LanRectanglesMixedSolid;
