import React from 'react';

export interface BruSquareGooglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareGooglePlus: React.FC<BruSquareGooglePlusProps>;
export default BruSquareGooglePlus;
