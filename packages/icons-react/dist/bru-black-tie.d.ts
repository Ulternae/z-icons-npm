import React from 'react';

export interface BruBlackTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBlackTie: React.FC<BruBlackTieProps>;
export default BruBlackTie;
