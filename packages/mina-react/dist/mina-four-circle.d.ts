import React from 'react';

export interface MinaFourCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourCircle(props: MinaFourCircleProps): React.ReactElement;
export default MinaFourCircle;
