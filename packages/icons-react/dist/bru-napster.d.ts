import React from 'react';

export interface BruNapsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNapster: React.FC<BruNapsterProps>;
export default BruNapster;
