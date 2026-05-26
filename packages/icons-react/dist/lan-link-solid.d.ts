import React from 'react';

export interface LanLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSolid: React.FC<LanLinkSolidProps>;
export default LanLinkSolid;
