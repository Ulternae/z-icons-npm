import React from 'react';

export interface LanFaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaxSolid: React.FC<LanFaxSolidProps>;
export default LanFaxSolid;
