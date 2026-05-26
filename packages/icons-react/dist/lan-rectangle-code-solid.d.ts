import React from 'react';

export interface LanRectangleCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleCodeSolid: React.FC<LanRectangleCodeSolidProps>;
export default LanRectangleCodeSolid;
