import React from 'react';

export interface MinaSearchCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchCircle(props: MinaSearchCircleProps): React.ReactElement;
export default MinaSearchCircle;
