import React from 'react';

export interface LanStaplerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaplerThin: React.FC<LanStaplerThinProps>;
export default LanStaplerThin;
