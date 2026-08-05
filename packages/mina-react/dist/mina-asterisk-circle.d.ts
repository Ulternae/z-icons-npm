import React from 'react';

export interface MinaAsteriskCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskCircle(props: MinaAsteriskCircleProps): React.ReactElement;
export default MinaAsteriskCircle;
