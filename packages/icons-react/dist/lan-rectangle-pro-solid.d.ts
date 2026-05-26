import React from 'react';

export interface LanRectangleProSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleProSolid: React.FC<LanRectangleProSolidProps>;
export default LanRectangleProSolid;
