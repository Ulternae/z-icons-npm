import React from 'react';

export interface MinaCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircle: React.FC<MinaCircleProps>;
export default MinaCircle;
