import React from 'react';

export interface LanCodeForkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeForkThin: React.FC<LanCodeForkThinProps>;
export default LanCodeForkThin;
