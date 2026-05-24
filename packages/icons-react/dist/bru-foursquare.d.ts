import React from 'react';

export interface BruFoursquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFoursquare: React.FC<BruFoursquareProps>;
export default BruFoursquare;
