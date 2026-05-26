import React from 'react';

export interface LanBorderOuterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderOuter: React.FC<LanBorderOuterProps>;
export default LanBorderOuter;
