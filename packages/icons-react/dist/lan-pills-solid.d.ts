import React from 'react';

export interface LanPillsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPillsSolid: React.FC<LanPillsSolidProps>;
export default LanPillsSolid;
