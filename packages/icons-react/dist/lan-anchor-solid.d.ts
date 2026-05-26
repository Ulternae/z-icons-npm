import React from 'react';

export interface LanAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorSolid: React.FC<LanAnchorSolidProps>;
export default LanAnchorSolid;
