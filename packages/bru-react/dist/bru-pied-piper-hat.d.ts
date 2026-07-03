import React from 'react';

export interface BruPiedPiperHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPiedPiperHat(props: BruPiedPiperHatProps): React.ReactElement;
export default BruPiedPiperHat;
