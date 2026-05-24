import React from 'react';

export interface BruFreeCodeCampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFreeCodeCamp: React.FC<BruFreeCodeCampProps>;
export default BruFreeCodeCamp;
