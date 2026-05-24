import React from 'react';

export interface BruOdnoklassnikiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOdnoklassniki: React.FC<BruOdnoklassnikiProps>;
export default BruOdnoklassniki;
