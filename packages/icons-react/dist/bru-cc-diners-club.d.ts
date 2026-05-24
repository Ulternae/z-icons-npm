import React from 'react';

export interface BruCcDinersClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcDinersClub: React.FC<BruCcDinersClubProps>;
export default BruCcDinersClub;
