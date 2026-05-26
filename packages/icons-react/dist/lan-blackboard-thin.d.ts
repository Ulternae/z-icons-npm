import React from 'react';

export interface LanBlackboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlackboardThin: React.FC<LanBlackboardThinProps>;
export default LanBlackboardThin;
