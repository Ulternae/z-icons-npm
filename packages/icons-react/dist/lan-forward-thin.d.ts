import React from 'react';

export interface LanForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardThin: React.FC<LanForwardThinProps>;
export default LanForwardThin;
