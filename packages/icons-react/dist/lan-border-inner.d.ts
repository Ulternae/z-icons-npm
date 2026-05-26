import React from 'react';

export interface LanBorderInnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderInner: React.FC<LanBorderInnerProps>;
export default LanBorderInner;
