import React from 'react';

export interface LanFunctionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFunctionThin: React.FC<LanFunctionThinProps>;
export default LanFunctionThin;
