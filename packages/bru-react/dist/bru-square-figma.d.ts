import React from 'react';

export interface BruSquareFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareFigma(props: BruSquareFigmaProps): React.ReactElement;
export default BruSquareFigma;
