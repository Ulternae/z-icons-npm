import React from 'react';

export interface LanRulerHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerHorizontal: React.FC<LanRulerHorizontalProps>;
export default LanRulerHorizontal;
