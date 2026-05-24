import React from 'react';

export interface BruResearchgateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruResearchgate: React.FC<BruResearchgateProps>;
export default BruResearchgate;
