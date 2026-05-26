import React from 'react';

export interface LanRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleWideSolid: React.FC<LanRectangleWideSolidProps>;
export default LanRectangleWideSolid;
