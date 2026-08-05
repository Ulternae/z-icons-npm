import React from 'react';

export interface MinaOneCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneCircle(props: MinaOneCircleProps): React.ReactElement;
export default MinaOneCircle;
