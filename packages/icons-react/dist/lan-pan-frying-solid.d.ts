import React from 'react';

export interface LanPanFryingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFryingSolid: React.FC<LanPanFryingSolidProps>;
export default LanPanFryingSolid;
