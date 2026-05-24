import React from 'react';

export interface BruGoodreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoodreads: React.FC<BruGoodreadsProps>;
export default BruGoodreads;
