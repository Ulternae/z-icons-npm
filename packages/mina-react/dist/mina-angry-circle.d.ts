import React from 'react';

export interface MinaAngryCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngryCircle(props: MinaAngryCircleProps): React.ReactElement;
export default MinaAngryCircle;
