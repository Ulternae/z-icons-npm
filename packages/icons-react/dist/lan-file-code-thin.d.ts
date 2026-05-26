import React from 'react';

export interface LanFileCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCodeThin: React.FC<LanFileCodeThinProps>;
export default LanFileCodeThin;
