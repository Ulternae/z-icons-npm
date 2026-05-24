import React from 'react';

export interface BruGoodreadsGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoodreadsG: React.FC<BruGoodreadsGProps>;
export default BruGoodreadsG;
