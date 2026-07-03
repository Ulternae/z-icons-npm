import React from 'react';

export interface BruFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFigma(props: BruFigmaProps): React.ReactElement;
export default BruFigma;
