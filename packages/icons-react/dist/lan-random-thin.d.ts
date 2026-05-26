import React from 'react';

export interface LanRandomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRandomThin: React.FC<LanRandomThinProps>;
export default LanRandomThin;
