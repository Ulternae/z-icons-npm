import React from 'react';

export interface BruPiedPiperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPiedPiper(props: BruPiedPiperProps): React.ReactElement;
export default BruPiedPiper;
