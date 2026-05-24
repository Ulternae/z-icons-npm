import React from 'react';

export interface BruRedhatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRedhat: React.FC<BruRedhatProps>;
export default BruRedhat;
