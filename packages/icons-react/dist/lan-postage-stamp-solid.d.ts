import React from 'react';

export interface LanPostageStampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPostageStampSolid: React.FC<LanPostageStampSolidProps>;
export default LanPostageStampSolid;
