import React from 'react';

export interface LanBorderBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderBottom: React.FC<LanBorderBottomProps>;
export default LanBorderBottom;
