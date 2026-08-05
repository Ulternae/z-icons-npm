import React from 'react';

export interface MinaEuroCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroCircle(props: MinaEuroCircleProps): React.ReactElement;
export default MinaEuroCircle;
