import React from 'react';

export interface BruDuolingoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDuolingo: React.FC<BruDuolingoProps>;
export default BruDuolingo;
