import React from 'react';

export interface LanPenFancySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancySolid: React.FC<LanPenFancySolidProps>;
export default LanPenFancySolid;
