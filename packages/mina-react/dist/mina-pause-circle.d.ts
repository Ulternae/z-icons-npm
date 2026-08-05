import React from 'react';

export interface MinaPauseCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseCircle(props: MinaPauseCircleProps): React.ReactElement;
export default MinaPauseCircle;
