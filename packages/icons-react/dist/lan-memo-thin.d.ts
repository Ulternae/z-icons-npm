import React from 'react';

export interface LanMemoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoThin: React.FC<LanMemoThinProps>;
export default LanMemoThin;
