import React from 'react';

export interface BruPage4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPage4: React.FC<BruPage4Props>;
export default BruPage4;
