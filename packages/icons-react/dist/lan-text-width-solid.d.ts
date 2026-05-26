import React from 'react';

export interface LanTextWidthSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextWidthSolid: React.FC<LanTextWidthSolidProps>;
export default LanTextWidthSolid;
