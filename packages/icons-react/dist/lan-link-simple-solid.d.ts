import React from 'react';

export interface LanLinkSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleSolid: React.FC<LanLinkSimpleSolidProps>;
export default LanLinkSimpleSolid;
