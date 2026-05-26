import React from 'react';

export interface LanRefrigeratorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRefrigeratorThin: React.FC<LanRefrigeratorThinProps>;
export default LanRefrigeratorThin;
