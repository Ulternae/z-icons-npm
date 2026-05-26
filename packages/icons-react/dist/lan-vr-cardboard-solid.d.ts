import React from 'react';

export interface LanVrCardboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVrCardboardSolid: React.FC<LanVrCardboardSolidProps>;
export default LanVrCardboardSolid;
