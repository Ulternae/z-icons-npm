import React from 'react';

export interface MinaEuroOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroOctagon(props: MinaEuroOctagonProps): React.ReactElement;
export default MinaEuroOctagon;
