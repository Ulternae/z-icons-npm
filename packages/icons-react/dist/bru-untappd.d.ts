import React from 'react';

export interface BruUntappdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUntappd: React.FC<BruUntappdProps>;
export default BruUntappd;
