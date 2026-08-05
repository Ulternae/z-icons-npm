import React from 'react';

export interface MinaNineCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineCircle(props: MinaNineCircleProps): React.ReactElement;
export default MinaNineCircle;
