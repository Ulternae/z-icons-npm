import React from 'react';

export interface LanSignHangingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignHangingSolid: React.FC<LanSignHangingSolidProps>;
export default LanSignHangingSolid;
