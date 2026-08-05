import React from 'react';

export interface MinaSixCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixCircle(props: MinaSixCircleProps): React.ReactElement;
export default MinaSixCircle;
