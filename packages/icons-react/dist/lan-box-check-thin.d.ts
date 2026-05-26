import React from 'react';

export interface LanBoxCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCheckThin: React.FC<LanBoxCheckThinProps>;
export default LanBoxCheckThin;
