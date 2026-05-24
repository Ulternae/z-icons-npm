import React from 'react';

export interface BruOsiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOsi: React.FC<BruOsiProps>;
export default BruOsi;
