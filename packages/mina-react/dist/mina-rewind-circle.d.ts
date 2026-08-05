import React from 'react';

export interface MinaRewindCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindCircle(props: MinaRewindCircleProps): React.ReactElement;
export default MinaRewindCircle;
