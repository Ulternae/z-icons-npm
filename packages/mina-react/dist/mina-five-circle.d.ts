import React from 'react';

export interface MinaFiveCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveCircle(props: MinaFiveCircleProps): React.ReactElement;
export default MinaFiveCircle;
