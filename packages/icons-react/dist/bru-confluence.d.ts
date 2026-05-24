import React from 'react';

export interface BruConfluenceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruConfluence: React.FC<BruConfluenceProps>;
export default BruConfluence;
