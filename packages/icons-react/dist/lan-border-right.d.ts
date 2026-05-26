import React from 'react';

export interface LanBorderRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderRight: React.FC<LanBorderRightProps>;
export default LanBorderRight;
