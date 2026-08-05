import React from 'react';

export interface MinaPercentageCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageCircle(props: MinaPercentageCircleProps): React.ReactElement;
export default MinaPercentageCircle;
