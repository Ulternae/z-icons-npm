import React from 'react';

export interface LanReflectHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectHorizontalSolid: React.FC<LanReflectHorizontalSolidProps>;
export default LanReflectHorizontalSolid;
