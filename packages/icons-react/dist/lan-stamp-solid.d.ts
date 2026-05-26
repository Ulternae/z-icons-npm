import React from 'react';

export interface LanStampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStampSolid: React.FC<LanStampSolidProps>;
export default LanStampSolid;
