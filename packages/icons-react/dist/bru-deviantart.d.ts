import React from 'react';

export interface BruDeviantartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDeviantart: React.FC<BruDeviantartProps>;
export default BruDeviantart;
