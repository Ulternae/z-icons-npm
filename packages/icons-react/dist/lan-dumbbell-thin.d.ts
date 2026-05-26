import React from 'react';

export interface LanDumbbellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumbbellThin: React.FC<LanDumbbellThinProps>;
export default LanDumbbellThin;
