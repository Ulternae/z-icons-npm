import React from 'react';

export interface LanSignal2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal2Regular: React.FC<LanSignal2RegularProps>;
export default LanSignal2Regular;
