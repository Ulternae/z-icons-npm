import React from 'react';

export interface LanKiwiBirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiBirdSolid: React.FC<LanKiwiBirdSolidProps>;
export default LanKiwiBirdSolid;
