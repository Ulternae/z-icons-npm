import React from 'react';

export interface MinaEightCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightCircle(props: MinaEightCircleProps): React.ReactElement;
export default MinaEightCircle;
