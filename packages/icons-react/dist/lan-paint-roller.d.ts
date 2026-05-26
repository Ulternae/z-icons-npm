import React from 'react';

export interface LanPaintRollerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintRoller: React.FC<LanPaintRollerProps>;
export default LanPaintRoller;
