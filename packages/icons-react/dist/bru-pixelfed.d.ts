import React from 'react';

export interface BruPixelfedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPixelfed: React.FC<BruPixelfedProps>;
export default BruPixelfed;
