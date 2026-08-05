import React from 'react';

export interface MinaBrandFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandFigma(props: MinaBrandFigmaProps): React.ReactElement;
export default MinaBrandFigma;
