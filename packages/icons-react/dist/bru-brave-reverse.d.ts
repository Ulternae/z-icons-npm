import React from 'react';

export interface BruBraveReverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBraveReverse: React.FC<BruBraveReverseProps>;
export default BruBraveReverse;
