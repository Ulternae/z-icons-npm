import React from 'react';

export interface MinaZeroCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroCircle(props: MinaZeroCircleProps): React.ReactElement;
export default MinaZeroCircle;
