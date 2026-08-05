import React from 'react';

export interface MinaMinusCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusCircle(props: MinaMinusCircleProps): React.ReactElement;
export default MinaMinusCircle;
