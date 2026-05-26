import React from 'react';

export interface LanPenLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenLine: React.FC<LanPenLineProps>;
export default LanPenLine;
