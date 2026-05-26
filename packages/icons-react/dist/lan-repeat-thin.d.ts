import React from 'react';

export interface LanRepeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatThin: React.FC<LanRepeatThinProps>;
export default LanRepeatThin;
