import React from 'react';

export interface BruPiedPiperPpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPiedPiperPp(props: BruPiedPiperPpProps): React.ReactElement;
export default BruPiedPiperPp;
