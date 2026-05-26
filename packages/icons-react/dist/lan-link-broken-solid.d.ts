import React from 'react';

export interface LanLinkBrokenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkBrokenSolid: React.FC<LanLinkBrokenSolidProps>;
export default LanLinkBrokenSolid;
