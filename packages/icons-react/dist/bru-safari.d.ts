import React from 'react';

export interface BruSafariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSafari: React.FC<BruSafariProps>;
export default BruSafari;
