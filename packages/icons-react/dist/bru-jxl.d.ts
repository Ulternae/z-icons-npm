import React from 'react';

export interface BruJxlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJxl: React.FC<BruJxlProps>;
export default BruJxl;
