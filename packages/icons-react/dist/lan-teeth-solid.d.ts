import React from 'react';

export interface LanTeethSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethSolid: React.FC<LanTeethSolidProps>;
export default LanTeethSolid;
