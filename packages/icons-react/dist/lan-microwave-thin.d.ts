import React from 'react';

export interface LanMicrowaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrowaveThin: React.FC<LanMicrowaveThinProps>;
export default LanMicrowaveThin;
