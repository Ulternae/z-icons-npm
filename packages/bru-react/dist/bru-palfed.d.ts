import React from 'react';

export interface BruPalfedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPalfed(props: BruPalfedProps): React.ReactElement;
export default BruPalfed;
