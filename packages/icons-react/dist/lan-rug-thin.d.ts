import React from 'react';

export interface LanRugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugThin: React.FC<LanRugThinProps>;
export default LanRugThin;
