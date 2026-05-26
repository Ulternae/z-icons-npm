import React from 'react';

export interface LanShareAllThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAllThin: React.FC<LanShareAllThinProps>;
export default LanShareAllThin;
