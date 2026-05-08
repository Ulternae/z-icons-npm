import React from 'react';

export interface MinaStopCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopCircle: React.FC<MinaStopCircleProps>;
export default MinaStopCircle;
