import React from 'react';

export interface MinaCodeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeCircle(props: MinaCodeCircleProps): React.ReactElement;
export default MinaCodeCircle;
