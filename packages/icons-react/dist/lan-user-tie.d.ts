import React from 'react';

export interface LanUserTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTie: React.FC<LanUserTieProps>;
export default LanUserTie;
