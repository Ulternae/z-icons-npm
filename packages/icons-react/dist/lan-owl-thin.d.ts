import React from 'react';

export interface LanOwlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOwlThin: React.FC<LanOwlThinProps>;
export default LanOwlThin;
