import React from 'react';

export interface LanTacoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTacoSolid: React.FC<LanTacoSolidProps>;
export default LanTacoSolid;
