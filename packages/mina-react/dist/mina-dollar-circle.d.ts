import React from 'react';

export interface MinaDollarCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarCircle(props: MinaDollarCircleProps): React.ReactElement;
export default MinaDollarCircle;
