import React from 'react';

export interface BruSquarePiedPiperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquarePiedPiper(props: BruSquarePiedPiperProps): React.ReactElement;
export default BruSquarePiedPiper;
