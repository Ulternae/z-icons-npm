import React from 'react';

export interface LanCircle2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle2Regular: React.FC<LanCircle2RegularProps>;
export default LanCircle2Regular;
