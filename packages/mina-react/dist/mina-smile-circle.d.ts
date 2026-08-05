import React from 'react';

export interface MinaSmileCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileCircle(props: MinaSmileCircleProps): React.ReactElement;
export default MinaSmileCircle;
