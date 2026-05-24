import React from 'react';

export interface BruPadletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPadlet: React.FC<BruPadletProps>;
export default BruPadlet;
