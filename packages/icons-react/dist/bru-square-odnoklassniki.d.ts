import React from 'react';

export interface BruSquareOdnoklassnikiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareOdnoklassniki: React.FC<BruSquareOdnoklassnikiProps>;
export default BruSquareOdnoklassniki;
