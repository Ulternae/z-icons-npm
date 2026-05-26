import React from 'react';

export interface LanPaintRollerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintRollerThin: React.FC<LanPaintRollerThinProps>;
export default LanPaintRollerThin;
