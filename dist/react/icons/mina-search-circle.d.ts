import React from 'react';

export interface MinaSearchCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchCircle: React.FC<MinaSearchCircleProps>;
export default MinaSearchCircle;
