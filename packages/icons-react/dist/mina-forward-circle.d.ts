import React from 'react';

export interface MinaForwardCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardCircle: React.FC<MinaForwardCircleProps>;
export default MinaForwardCircle;
