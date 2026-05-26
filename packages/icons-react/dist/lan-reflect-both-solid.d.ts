import React from 'react';

export interface LanReflectBothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectBothSolid: React.FC<LanReflectBothSolidProps>;
export default LanReflectBothSolid;
