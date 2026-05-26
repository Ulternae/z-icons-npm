import React from 'react';

export interface LanRectangleAdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleAdSolid: React.FC<LanRectangleAdSolidProps>;
export default LanRectangleAdSolid;
