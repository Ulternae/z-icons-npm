import React from 'react';

export interface BruSquareTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareTwitter: React.FC<BruSquareTwitterProps>;
export default BruSquareTwitter;
