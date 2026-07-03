import React from 'react';

export interface BruPixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPix(props: BruPixProps): React.ReactElement;
export default BruPix;
