import React from 'react';

export interface BruSquareUpworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareUpwork(props: BruSquareUpworkProps): React.ReactElement;
export default BruSquareUpwork;
