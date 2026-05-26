import React from 'react';

export interface LanClawMarksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClawMarksThin: React.FC<LanClawMarksThinProps>;
export default LanClawMarksThin;
