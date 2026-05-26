import React from 'react';

export interface LanPencilLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilLine: React.FC<LanPencilLineProps>;
export default LanPencilLine;
