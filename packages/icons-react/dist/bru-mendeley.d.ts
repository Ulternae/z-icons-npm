import React from 'react';

export interface BruMendeleyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMendeley: React.FC<BruMendeleyProps>;
export default BruMendeley;
