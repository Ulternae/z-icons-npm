import React from 'react';

export interface MinaCircleHalfCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleHalfCircle(props: MinaCircleHalfCircleProps): React.ReactElement;
export default MinaCircleHalfCircle;
