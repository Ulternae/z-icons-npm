import React from 'react';

export interface LanScrollTorahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollTorahThin: React.FC<LanScrollTorahThinProps>;
export default LanScrollTorahThin;
