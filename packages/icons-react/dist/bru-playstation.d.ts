import React from 'react';

export interface BruPlaystationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPlaystation: React.FC<BruPlaystationProps>;
export default BruPlaystation;
