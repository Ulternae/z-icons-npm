import React from 'react';

export interface LanBalanceScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScale: React.FC<LanBalanceScaleProps>;
export default LanBalanceScale;
