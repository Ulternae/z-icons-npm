import React from 'react';

export interface LanRepeatAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatAltThin: React.FC<LanRepeatAltThinProps>;
export default LanRepeatAltThin;
