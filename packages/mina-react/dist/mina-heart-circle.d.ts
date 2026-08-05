import React from 'react';

export interface MinaHeartCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartCircle(props: MinaHeartCircleProps): React.ReactElement;
export default MinaHeartCircle;
