import React from 'react';

export interface MinaCodeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeCircle: React.FC<MinaCodeCircleProps>;
export default MinaCodeCircle;
