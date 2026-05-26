import React from 'react';

export interface LanReflectVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectVerticalSolid: React.FC<LanReflectVerticalSolidProps>;
export default LanReflectVerticalSolid;
