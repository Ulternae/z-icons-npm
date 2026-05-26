import React from 'react';

export interface LanDollyEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyEmptySolid: React.FC<LanDollyEmptySolidProps>;
export default LanDollyEmptySolid;
