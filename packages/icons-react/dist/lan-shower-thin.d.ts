import React from 'react';

export interface LanShowerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShowerThin: React.FC<LanShowerThinProps>;
export default LanShowerThin;
