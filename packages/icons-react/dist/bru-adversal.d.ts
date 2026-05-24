import React from 'react';

export interface BruAdversalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAdversal: React.FC<BruAdversalProps>;
export default BruAdversal;
