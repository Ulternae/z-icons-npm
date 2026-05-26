import React from 'react';

export interface LanPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPen: React.FC<LanPenProps>;
export default LanPen;
