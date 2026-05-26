import React from 'react';

export interface LanDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeskSolid: React.FC<LanDeskSolidProps>;
export default LanDeskSolid;
