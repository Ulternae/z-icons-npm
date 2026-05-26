import React from 'react';

export interface LanRectangleApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleApiSolid: React.FC<LanRectangleApiSolidProps>;
export default LanRectangleApiSolid;
