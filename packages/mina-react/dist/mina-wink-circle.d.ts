import React from 'react';

export interface MinaWinkCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkCircle(props: MinaWinkCircleProps): React.ReactElement;
export default MinaWinkCircle;
