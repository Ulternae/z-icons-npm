import React from 'react';

export interface LanBoxOpenFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenFullThin: React.FC<LanBoxOpenFullThinProps>;
export default LanBoxOpenFullThin;
