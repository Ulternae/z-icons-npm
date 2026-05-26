import React from 'react';

export interface LanBlockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockThin: React.FC<LanBlockThinProps>;
export default LanBlockThin;
