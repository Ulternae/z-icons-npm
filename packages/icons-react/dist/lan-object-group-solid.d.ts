import React from 'react';

export interface LanObjectGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectGroupSolid: React.FC<LanObjectGroupSolidProps>;
export default LanObjectGroupSolid;
